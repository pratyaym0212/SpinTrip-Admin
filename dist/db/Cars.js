import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Cars extends Model {}

Cars.init(
  {
    carid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    carmodel: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    brand: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    variant: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    chassisno: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    Rcnumber: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    Enginenumber: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    Registrationyear: {
      type: new DataTypes.DATEONLY,
      allowNull: true,
    },
    hostId: {
      type: new DataTypes.STRING(36),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Cars',
    modelName: 'Cars',
  }
);

export default Cars;