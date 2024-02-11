import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';
// 'Admin.js'
//import { DataTypes } from 'sequelize';
//import sequelize from './your-sequelize-instance';

const Admins = sequelize.define('Admins', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  }
  // Add other columns as needed
});

export { Admins };