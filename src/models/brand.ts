import sequelize, { DataTypes, Model } from './db';

class Brand extends Model {
	static async getAll() {
		return this.findAll();
	}

	static async createNew(name: any) {
		const [brand, created] = await this.findOrCreate({
			where: { name },
			defaults: { name },
		});

		return { brand, created };
	}
}

Brand.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Brand',
		tableName: 'Brands',
	}
);

export default Brand;
