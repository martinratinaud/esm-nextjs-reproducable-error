// import fetcher from 'open-terms-archive'; // ./src/index.js
// import fetcher from 'open-terms-archive/cjs/fetcher'; // "./src/exports/fetcher.cjs.js"
// import fetcher from 'open-terms-archive/es/fetcher'; // ./src/exports/fetcher.es.js
import fetcher from 'open-terms-archive/fetcher'; // ./src/exports/fetcher.js
// import fetcher from 'open-terms-archive/fetcher.js'; // ./src/exports/fetcher.js
// import fetcher from 'open-terms-archive/src/exports/fetcher.js'; // ./*
// import fetcher from 'open-terms-archive/src/exports/fetcher.cjs.js'; // ./*
// import fetcher from 'open-terms-archive/src/exports/fetcher.es.js'; // ./*

console.log('');//eslint-disable-line
console.log('╔════START══fetcher══in test.ts════════════════════════════════════════════════');//eslint-disable-line
console.log(fetcher);//eslint-disable-line
console.log('╚════END════fetcher══════════════════════════════════════════════════');//eslint-disable-line

const test = async () => {
    const result = await fetcher.fetch({url: "https://www.facebook.com/1274573812/videos/1217989475403949/"})    
    console.log("result")
}
export default test;
