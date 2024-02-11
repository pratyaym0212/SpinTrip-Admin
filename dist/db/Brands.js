import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Brands extends Model {}

Brands.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    type: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    carmodel: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    brand_value: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    base_price: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Brands',
    modelName: 'Brands',
  }
);

export default Brands;