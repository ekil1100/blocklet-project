// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import * as cheerio from 'cheerio';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

export default async function handler(req, res) {
  const querySchema = z.object({
    p: z.preprocess((v) => Number(v), z.number().min(1, 'Page must greater than 0')).optional(),
    ps: z.enum(['10', '25', '50', '100']).optional(),
    a: z.string({ required_error: 'ETH address is required' }).regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid ETH address'),
  });
  const query = req.query;
  const isValid = querySchema.safeParse(query);

  if (!isValid.success) {
    res.status(400).json({
      message: fromZodError(isValid.error).message,
      error: isValid.error,
    });
  }

  const html = await readPage(query);
  const data = parser(html);
  const page = Number(query.p ?? 1);
  const pageSize = Number(query.ps ?? 50);
  const count = totalTxn(html);
  const dataSize = data.length;

  res.setHeader('Cache-Control', 'max-age=12, stale-while-revalidate=59');
  res.status(200).json({
    page,
    pageSize,
    count,
    dataSize,
    data,
  });
}

export function totalTxn(html) {
  const $ = cheerio.load(html);
  const total = $('#ContentPlaceHolder1_divDataInfo > div > div:nth-child(1) > span')
    .text()
    .trim()
    .match(/\d+/g)
    .join('');

  return Number(total ?? 0);
}

// input a html string, return json data for the table
export function parser(html) {
  const $ = cheerio.load(html);
  const tRows = $('#ContentPlaceHolder1_divTransactions > div.table-responsive > table > tbody > tr');
  const data = [];
  const regexPublicTag = /Public Tag: (.*?)(?=<)/;

  tRows.each((i, tr) => {
    const tds = $(tr).children('td');
    const fromRegex = regexPublicTag.exec($(tds[7]).children().children().first().attr('data-bs-title'));
    const toRegex = regexPublicTag.exec($(tds[9]).children().children().first().next().attr('data-bs-title'));

    const td = {
      hash: $(tds[1]).text().trim(),
      method: $(tds[2]).find('span').attr('title'),
      block: $(tds[3]).text().trim(),
      date: $(tds[4]).text().trim(),
      age: $(tds[5]).text().trim(),
      localDate: $(tds[6]).text().trim(),
      fromTag: fromRegex ? fromRegex[1] : null,
      from: $(tds[7]).find('a').last().attr('data-clipboard-text'),
      toTag: toRegex ? toRegex[1] : null,
      to: $(tds[9]).find('a').last().attr('data-clipboard-text'),
      value: $(tds[10]).find('span').attr('data-bs-title'),
      fee: $(tds[11]).text().trim(),
      gas: $(tds[12]).text().trim(),
    };

    data.push(td);
  });

  return data;
}

// input query, return html string
async function readPage(query) {
  const res = await axios.get('https://etherscan.io/txs', {
    params: query,
  });
  return res.data;
}
