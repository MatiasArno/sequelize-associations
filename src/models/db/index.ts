import { Sequelize, DataTypes, Model } from 'sequelize';
import { POSTGRESQL_URL } from '../../constants';

const sequelize = new Sequelize(POSTGRESQL_URL);

async function testConnection() {
	try {
		return await sequelize.authenticate();
	} catch (error) {
		return new Error('Cannot establish connection to ElephantSQL');
	}
}

export { testConnection, DataTypes, Model };
export default sequelize;
