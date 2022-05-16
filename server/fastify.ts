// @ts-ignore
import createFastify from 'fastify';
import fastifyNextJs from '@applicazza/fastify-nextjs';

const dev = process.env.NODE_ENV !== 'production';

const fastify = createFastify();

fastify.register(fastifyNextJs, {
    dev,
});

(async () => {
    await fastify.after();

    fastify.passNextJsDataRequests();
    fastify.passNextJsImageRequests();
    if (dev) {
        fastify.passNextJsDevRequests();
    } else {
        fastify.passNextJsStaticRequests();
    }
    fastify.passNextJsPageRequests();

    await fastify.listen(3000);
})()

// yarn run swc server/fastify.ts -o server/fastify.mjs -C module.type=es6 -C sourceMaps=inline
// yarn run swc server/index.ts -o server/index.mjs -C module.type=es6 -C sourceMaps=inline
