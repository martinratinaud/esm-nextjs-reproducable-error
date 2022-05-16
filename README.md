# ESM - NextJS reproducable error

This repo has been created using This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It aims at reproducing errors when trying to include a ES module inside a custom server implementation in NextJS with Typescript

## Install

### ESM library

First we need to install the ESM library that causes problems when included in NextJs.
And also put it on the correct branch

```
git clone git@github.com:ambanum/OpenTermsArchive.git
cd OpenTermsArchive
git checkout expose_fetch
```

This branch uses the package.json functionality `exports` to export simple functions.

### NextJs project using ESM library

```
git clone git@github.com:martinratinaud/esm-nextjs-reproducable-error.git
cd esm-nextjs-reproducable-error
```

## Testing

ESM library included is exposing the following

```
 "main": "src/index.js",
  "exports": {
    ".": "./src/index.js",
    "./cjs/fetcher": "./src/exports/fetcher.cjs.js",
    "./es/fetcher": "./src/exports/fetcher.es.js",
    "./fetcher": "./src/exports/fetcher.mjs",
    "./fetcher.js": "./src/exports/fetcher.js"
  },
```

It should thus be importable through this

```
import fetcher from 'open-terms-archive'
import fetcher from 'open-terms-archive/cjs/fetcher'
import fetcher from 'open-terms-archive/es/fetcher'
import fetcher from 'open-terms-archive/fetcher'
import fetcher from 'open-terms-archive/fetcher.js'
```

I created several commands to test all thos configurations which none actually worked.

In each of the `server/*` files, you can comment/uncomment lines to test several kinds of imports which none actually worked for me.

**NOTE**
In case you want to test on your local, you can use `npm link` this way

```
cd OpenTermsArchive && npm link
cd esm-nextjs-reproducable-error && npm link open-terms-archive
```

### Import in javascript

Launch `yarn run dev:custom:js`

get the following error

```
Cannot use import statement outside a module
```

See details in `server/index.js`
