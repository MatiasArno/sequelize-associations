import { Request, Response } from 'express';
import Brand from '../models/brand';

abstract class BrandController {
	static async getAll(_req: Request, res: Response) {
		const allBrands = await Brand.getAll();
		res.status(200).json({ allBrands });
	}

	static async createOne(req: Request, res: Response) {
		const { name } = req.body;

		if (!name)
			return res.status(400).json({ error: 'Name field is required' });

		const newBrand = await Brand.createNew(name);
		res.status(201).json({ newBrand });
	}
}

export default BrandController;