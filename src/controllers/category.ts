import { Request, Response } from 'express';
import Category from '../models/category';

abstract class CategoryController {
	static async getAll(req: Request, res: Response) {
		const allCategories = await Category.getAll();
		return res.status(200).json({ allCategories });
	}

	static async createOne(req: Request, res: Response) {
		const { name } = req.body;

		if (!name)
			return res.status(400).json({ error: 'Name field is required' });

		const newCategory = await Category.createNew(name);
		return res.status(201).json({ newCategory });
	}
}

export default CategoryController;
