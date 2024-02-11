import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';
// 'Admin.js'
//import { DataTypes } from 'sequelize';
//import sequelize from './your-sequelize-instance';

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  otp: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  // Add other columns as needed
});

export default Users ;