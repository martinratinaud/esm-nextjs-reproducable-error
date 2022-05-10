// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
// @ts-ignore
import fetcherEs from 'open-terms-archive/src/other.es.js';

console.log(''); //eslint-disable-line
console.log('╔════START══fetcher══════════════════════════════════════════════════'); //eslint-disable-line
// console.log(fetcher); //eslint-disable-line
// console.log(fetcherEs); //eslint-disable-line
console.log(fetcherEs); //eslint-disable-line
console.log('╚════END════fetcher══════════════════════════════════════════════════'); //eslint-disable-line

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Es' })
}