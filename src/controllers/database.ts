import { Request, Response } from 'express';
import { testConnection } from '../models/db';
import * as pkg from '../../package.json';

abstract class DB {
	static async testConnection(_req: Request, res: Response) {
		const result = await testConnection();
		const { name, version, author, description } = pkg;

		const isDBCOnnected =
			result instanceof Error ? result.message : 'connected to PostgreSQL';

		if (result instanceof Error)
			return res.status(503).json({
				error: result.message,
			});

		res.status(200).json({
			name,
			version,
			author,
			description,
			database: isDBCOnnected,
		});
	}
}

export default DB;
