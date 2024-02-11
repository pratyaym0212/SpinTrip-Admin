import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class CarAdditionals extends Model {}

CarAdditionals.init(
  {
    carid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    HorsePower: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    AC: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Autowindow: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Musicsystem: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Sunroof: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Touchscreen: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Sevenseater: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Reversecamera: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Transmission: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Airbags: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    verification_status: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    FuelType: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'CarAdditionals',
    modelName: 'CarAdditionals',
  }
);

export default CarAdditionals;