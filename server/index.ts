/**
/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/index.js:785
            return old(m, filename);
                   ^
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/open-terms-archive/src/archivist/fetcher/index.js from /Users/martin/Workspace/ambanum/esm-next-reproduced-error/server/index.ts not supported.
Instead change the require of index.js in /Users/martin/Workspace/ambanum/esm-next-reproduced-error/server/index.ts to a dynamic import() which is available in all CommonJS modules.
    at Object.require.extensions.<computed> [as .js] (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/index.js:785:20)
    at Object.<anonymous> (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/server/index.ts:65:44)
    at Module.m._compile (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/index.js:791:29)
    at Object.require.extensions.<computed> [as .ts] (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/index.js:793:16)
    at phase4 (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/bin.js:407:16)
    at bootstrap (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/bin.js:49:12)
    at main (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/bin.js:32:12)
    at Object.<anonymous> (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/dist/bin.js:519:5) {
  code: 'ERR_REQUIRE_ESM'
}
*/

// @ts-ignore-start
import fetcher from 'open-terms-archive'; // ./src/archivist/fetcher/index.js
// import fetcher from 'open-terms-archive/cjs/fetcher'; // "./src/exports/fetcher.cjs.js"
// import fetcher from 'open-terms-archive/es/fetcher'; // ./src/exports/fetcher.es.js
// import fetcher from 'open-terms-archive/fetcher'; // ./src/exports/fetcher.js
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
