import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class UserAdditionals extends Model {}

UserAdditionals.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    Dlverification: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    FullName: {
      type: new DataTypes.STRING(100),
      allowNull: true,
    },
    AadharVfid: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    Address: {
      type: new DataTypes.TEXT,
      allowNull: true,
    },
    verification_status: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    CurrentAddressVfid: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    ml_data: {
      type: new DataTypes.BLOB,
      allowNull: true,
    },
    dl: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    aadhar: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'UserAdditionals',
    modelName: 'UserAdditionals',
  }
);

export default UserAdditionals;