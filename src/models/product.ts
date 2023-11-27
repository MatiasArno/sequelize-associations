import sequelize, { DataTypes, Model } from './db';
import Category from '../models/category';
import Brand from '../models/brand';

class Product extends Model {
	static async getAll() {
		return this.findAll({
			include: [{ model: Category }, { model: Brand }],
		});
	}

	static async createNew(data: any) {
		const { name, stock, description, cost, brand, category } = data;

		const newProduct = (await Product.create({
			name,
			stock: Number(stock),
			description,
			cost: Number(cost),
		})) as any;

		await newProduct.setCategory(Number(category));
		await newProduct.setBrand(Number(brand));

		return newProduct;
	}
}

Product.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Product',
		tableName: 'Products',
	}
);

export default Product;
