import fastify from 'fastify';

class PDServer {
	static start() {
		const server = fastify();

		server.get('/', (request, reply) => {
			reply.send({ pcdiff: 'running' });
		});

		server.listen(3000, (err, address) => {
			if (err) {
				throw err;
			}
			console.log(`server listening on ${address}`);
		});

		return 0;
	}
}

export { PDServer };
