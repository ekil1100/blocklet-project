# Blocklet Project Demo

Install blocklet CLI

```
pnpm -g add @blocklet/cli
```

Start local blocklet server

```
blocklet server start -a
```

`-a` is the option for auto-initial the server. Or you can run init server first: `blocklet server init`.

Install dependencies

```
pnpm i
```

Run dev server

```
pnpm dev
```

## Links

- [blocklet document](https://developer.blocklet.io/docs/zh)

## Features

### Fetch transaction by ETH address

`GET /api/tsx`

#### Query

- `a`: ETH address
- `p`: page number
- `ps`: page size

#### Example

```shell
curl 'http://localhost:8090/api/tsx?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&p=2&ps=10'
```

#### Response

```ts
type Transaction = {
  hash: string; //transaction hash
  method: string;
  block: string;
  date: string;
  age: string;
  localDate: string;
  fromTag: string | null;
  from: string; // from address
  toTag: string | null;
  to: string; // to address
  value: string;
  fee: string;
  gas: string; // gas price
};

type Response = {
  page: number;
  pageSize: number;
  count: number; // total number of transactions
  dataSize: number; // actual returned data size
  data: Transaction[];
};
```

<details>
<summary>Body Example</summary>

```json
{
  "page": 2,
  "pageSize": 10,
  "count": 1535,
  "dataSize": 10,
  "data": [
    {
      "hash": "0xe8e78a9df5db826d5d5ad745988f881b167f19ddf40dcaf3408b5a293253d2f3",
      "method": "Multicall",
      "block": "15848839",
      "date": "2022-10-28 20:06:11",
      "age": "150 days 17 hrs ago",
      "localDate": "1666987571",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": "Uniswap V3: Router 2",
      "to": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      "value": "0.1 ETH",
      "fee": "0.00375268",
      "gas": "22.04981949"
    },
    {
      "hash": "0x7ed90899976ac6bf01a2a1bf8df252dc645f3710a3e31458a845da5f7685983d",
      "method": "Multicall",
      "block": "15848837",
      "date": "2022-10-28 20:05:47",
      "age": "150 days 17 hrs ago",
      "localDate": "1666987547",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": "Uniswap V3: Router 2",
      "to": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      "value": "0 ETH",
      "fee": "0.0030642",
      "gas": "23.44603316"
    },
    {
      "hash": "0x894400aaa316e8bebfbc9d20a6f564569e73216409047f567403879b2e520a80",
      "method": "Approve",
      "block": "15848836",
      "date": "2022-10-28 20:05:35",
      "age": "150 days 17 hrs ago",
      "localDate": "1666987535",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": "Terra: LUNC Token",
      "to": "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
      "value": "0 ETH",
      "fee": "0.00110021",
      "gas": "23.60529686"
    },
    {
      "hash": "0x4d6d363325f3d25b707b4b94081042bcc8346e98a7be528ac493e84ebee45181",
      "method": "Transfer",
      "block": "15821549",
      "date": "2022-10-25 0:36:11",
      "age": "154 days 13 hrs ago",
      "localDate": "1666658171",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": null,
      "to": "0x7F8Ab5f51ecEFE64dcDE52BC29977F788B52eB50",
      "value": "0.25 ETH",
      "fee": "0.00024358",
      "gas": "11.59910162"
    },
    {
      "hash": "0x53a513577fdcbe8d53f21974e4f757241d2f6a6295af4d00132a4a87b22b56e8",
      "method": "Multicall",
      "block": "15820345",
      "date": "2022-10-24 20:31:59",
      "age": "154 days 17 hrs ago",
      "localDate": "1666643519",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": "Uniswap V3: Router 2",
      "to": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      "value": "6.8 ETH",
      "fee": "0.00227502",
      "gas": "14.20833551"
    },
    {
      "hash": "0x3718809b9935c4664168caba3d5b06d6b0e471d8a939d18cf407dcb4be4b1ea1",
      "method": "Transfer",
      "block": "15820289",
      "date": "2022-10-24 20:20:35",
      "age": "154 days 17 hrs ago",
      "localDate": "1666642835",
      "fromTag": null,
      "from": "0xd960552D9647797c210e9C79Da493c08d2F6702B",
      "toTag": null,
      "to": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "value": "2 ETH",
      "fee": "0.000308",
      "gas": "14.6667399"
    },
    {
      "hash": "0xe37e30ed2e9e448cd3fad942071912e8c7fa3ef2f810bc0788bd04e401cc595a",
      "method": "Transfer",
      "block": "15813916",
      "date": "2022-10-23 22:53:11",
      "age": "155 days 14 hrs ago",
      "localDate": "1666565591",
      "fromTag": null,
      "from": "0xd960552D9647797c210e9C79Da493c08d2F6702B",
      "toTag": null,
      "to": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "value": "5 ETH",
      "fee": "0.0002047",
      "gas": "9.74807175"
    },
    {
      "hash": "0x0fa72e3fb6d622653cbcf5428e45aaedaf7ea309132abd02438475fb20d2ba4e",
      "method": "Multicall",
      "block": "15803793",
      "date": "2022-10-22 12:57:23",
      "age": "157 days 43 mins ago",
      "localDate": "1666443443",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": "Uniswap V3: Router 2",
      "to": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      "value": "0.7 ETH",
      "fee": "0.00294861",
      "gas": "17.32534738"
    },
    {
      "hash": "0x547a148ba132bc7db456e5b0e38ccd1858c16430f04b9840890ae8d0d085e003",
      "method": "Multicall",
      "block": "15803785",
      "date": "2022-10-22 12:55:47",
      "age": "157 days 44 mins ago",
      "localDate": "1666443347",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": "Uniswap V3: Router 2",
      "to": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      "value": "0 ETH",
      "fee": "0.00296684",
      "gas": "15.29174515"
    },
    {
      "hash": "0x322c67d581f2a89d0e3be775cadaccc35f3ddd9ba505dae13a83ea0b154d6d01",
      "method": "Approve",
      "block": "15803783",
      "date": "2022-10-22 12:55:23",
      "age": "157 days 45 mins ago",
      "localDate": "1666443323",
      "fromTag": null,
      "from": "0xeB2a81e229b68c1c22B6683275C00945f9872D90",
      "toTag": "Kiba Inu: KIBA Token",
      "to": "0x005D1123878Fc55fbd56b54C73963b234a64af3c",
      "value": "0 ETH",
      "fee": "0.00073088",
      "gas": "15.6748831"
    }
  ]
}
```

</details>
