import env from '../src/environment';

describe('environment', () => {
	it('should load config from .env', () => {
		const mustHaveEnv = [
			'NODE_ENV',
			'SERVER_PORT',
			'DB_NOSQL_HOST',
			'DB_NOSQL_PORT',
			'DB_NOSQL_USER',
			'DB_NOSQL_PASSWORD',
			'DB_NOSQL_NAME',
		];

		expect(env).toHaveProperty(...mustHaveEnv);
	});
});