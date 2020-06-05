import fastify from 'fastify';

import env from './environment';

class PDServer {
	static start() {
		const server = fastify();

		server.get('/', (request, reply) => {
			reply.send({ pcdiff: 'running' });
		});

		server.listen(env.SERVER_PORT, (err, address) => {
			if (err) {
				throw err;
			}
			console.log(`server listening on ${address}`);
		});

		return 0;
	}
}

export { PDServer };
