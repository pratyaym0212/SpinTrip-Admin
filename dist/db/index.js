import * as AdminJSSequelize from '@adminjs/sequelize'
import AdminJS from 'adminjs';
import sequelize from './config.js';
import Users from './User.js';


AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database,
})
const initialize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return { sequelize };
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        return {};
    }
};
export default initialize;
