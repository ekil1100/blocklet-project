import { test, expect } from 'vitest';
import fs from 'fs';
import { parser, totalTxn } from '../pages/api/tsx';
import tsx from './tsx.json';

test('parse table to json', () => {
  const input = fs.readFileSync('./__test__/tsx.html', 'utf-8');

  const data = parser(input);

  expect(data).toStrictEqual(tsx);
});

test('parse total of transactions from html', () => {
  const input = fs.readFileSync('./__test__/tsx.html', 'utf-8');

  const total = totalTxn(input);

  expect(total).toEqual(1535);
});
