import { Request, Response } from 'express';
import Product from '../models/product';

abstract class ProductController {
	static async getAll(_req: Request, res: Response) {
		const allProducts = await Product.getAll();
		return res.status(200).json({ allProducts });
	}

	static async createOne(req: Request, res: Response) {
		const { name, stock, description, cost, brand, category } = req.body;

		if (!name || !stock || !description || !cost || !category || !brand)
			return res.status(400).json({
				error: 'All basic data is required.',
			});

		const newProduct = await Product.createNew({
			name,
			stock,
			description,
			cost,
			brand,
			category,
		});

		res.status(201).json({ newProduct });
	}
}

export default ProductController;
