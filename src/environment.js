import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

let envPath;

// Validate the NODE_ENV
const NODE_ENV = process.env.NODE_ENV;
switch (NODE_ENV) {
	case 'development':
		envPath = path.resolve(__dirname, '../.env.development');
		break;
	case 'production':
		envPath = path.resolve(__dirname, '../.env.production');
		break;
	default:
		break;
}

dotenv.config({ path: envPath });

const env =  {
	/* GENERAL */
	NODE_ENV,
	SERVER_PORT: process.env.SERVER_PORT || 3000,
	/* DATABASE INFORMATION */
	DB_NOSQL_HOST: process.env.DB_NOSQL_HOST,
	DB_NOSQL_PORT: process.env.DB_NOSQL_PORT,
	DB_NOSQL_USER: process.env.DB_NOSQL_USER,
	DB_NOSQL_PASSWORD: process.env.DB_NOSQL_PASSWORD,
	DB_NOSQL_NAME: process.env.DB_NOSQL_NAME,
};

export default env;
