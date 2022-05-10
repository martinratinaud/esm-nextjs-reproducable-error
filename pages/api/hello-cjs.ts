// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// @ts-ignore
import fetcher from 'open-terms-archive/src/other.cjs.js';

console.log(''); //eslint-disable-line
console.log('╔════START══fetcher═cjs═════════════════════════════════════════════════'); //eslint-disable-line
console.log(fetcher); //eslint-disable-line
console.log('╚════END════fetcher══════════════════════════════════════════════════'); //eslint-disable-line

const url = 'https://raw.githubusercontent.com/ambanum/OpenTermsArchive/master/bin/validate.js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const resultWithAxios = await fetcher.fetch({ url });
    await fetcher.launchHeadlessBrowser();
    const resultWithPuppeter = await fetcher.fetch({ url, executeClientScripts: true });
    await fetcher.stopHeadlessBrowser();
    res.status(200).json({ name: 'Cjs', resultWithAxios, resultWithPuppeter })
  }catch (e:any) {
    console.log('');//eslint-disable-line
    console.log('╔════START══e══════════════════════════════════════════════════');//eslint-disable-line
    console.log(e);//eslint-disable-line
    console.log('╚════END════e══════════════════════════════════════════════════');//eslint-disable-line

    res.status(500)
  }
}
