/**
(node:66197) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/martin/Workspace/ambanum/esm-next-reproduced-error/server/index.ts:55
import fetcher from 'open-terms-archive'; // ./src/index.js
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1031:15)
    at Module._compile (node:internal/modules/cjs/loader:1065:27)
    at Module.m._compile (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/src/index.ts:1455:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/src/index.ts:1458:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at phase4 (/Users/martin/Workspace/ambanum/esm-next-reproduced-error/node_modules/ts-node/src/bin.ts:567:12)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

*/

// const fetcher = require('open-terms-archive/fetcher'); // ./src/index.js
import fetcher from 'open-terms-archive'; // ./src/index.js
// import fetcher from 'open-terms-archive/cjs/fetcher'; // "./src/exports/fetcher.cjs.js"
// import fetcher from 'open-terms-archive/es/fetcher'; // ./src/exports/fetcher.es.js
// import fetcher from 'open-terms-archive/fetcher'; // ./src/exports/fetcher.js
// import fetcher from 'open-terms-archive/fetcher.js'; // ./src/exports/fetcher.js
// import fetcher from 'open-terms-archive/src/exports/fetcher.js'; // ./*
// import fetcher from 'open-terms-archive/src/exports/fetcher.cjs.js'; // ./*
// import fetcher from 'open-terms-archive/src/exports/fetcher.es.js'; // ./*

console.log('');//eslint-disable-line
console.log('╔════START══fetcher══════════════════════════════════════════════════');//eslint-disable-line
console.log(fetcher);//eslint-disable-line
console.log('╚════END════fetcher══════════════════════════════════════════════════');//eslint-disable-line

(async () => {
  console.log("done")
})();
