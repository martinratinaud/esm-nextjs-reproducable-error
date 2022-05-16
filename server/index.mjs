/**
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /Users/martin/Workspace/ambanum/esm-next-reproduced-error/server/includes/test.ts
    at new NodeError (node:internal/errors:371:5)
    at Object.file: (node:internal/modules/esm/get_format:72:15)
    at defaultGetFormat (node:internal/modules/esm/get_format:85:38)
    at defaultLoad (node:internal/modules/esm/load:13:42)
    at ESMLoader.load (node:internal/modules/esm/loader:303:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:230:58)
    at new ModuleJob (node:internal/modules/esm/module_job:63:26)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:244:11)
    at async ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:78:21)
    at async Promise.all (index 1) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
*/

// @ts-ignore-start
// import fetcher from 'open-terms-archive'; // ./src/index.js
// import fetcher from 'open-terms-archive/cjs/fetcher'; // "./src/exports/fetcher.cjs.js"
// import fetcher from 'open-terms-archive/es/fetcher'; // ./src/exports/fetcher.es.js
import fetcher from 'open-terms-archive/fetcher'; // ./src/exports/fetcher.js
// import fetcher from 'open-terms-archive/fetcher.js'; // ./src/exports/fetcher.js
// import fetcher from 'open-terms-archive/src/exports/fetcher.js'; // ./*
// import fetcher from 'open-terms-archive/src/exports/fetcher.cjs.js'; // ./*
// import fetcher from 'open-terms-archive/src/exports/fetcher.es.js'; // ./*
// @ts-ignore-end

import test from './includes/test.ts'; // ./src/exports/fetcher.js

console.log('');//eslint-disable-line
console.log('╔════START══fetcher══════════════════════════════════════════════════');//eslint-disable-line
console.log(fetcher);//eslint-disable-line
console.log('╚════END════fetcher══════════════════════════════════════════════════');//eslint-disable-line

(async () => {
  await test();
  console.log("done")
})();
