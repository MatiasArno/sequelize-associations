import sequelize, { DataTypes, Model } from './db';

class Category extends Model {
	static async getAll() {
		return this.findAll();
	}

	static async createNew(name: any) {
		const [category, created] = await this.findOrCreate({
			where: { name },
			defaults: { name },
		});

		return { category, created };
	}
}

Category.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Category',
		tableName: 'Categories',
	}
);

export default Category;
