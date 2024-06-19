import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Taxes extends Model {}

Taxes.init(
 { 
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  GST: { type: new DataTypes.FLOAT, defaultValue: 18 },
  TDS: { type: new DataTypes.FLOAT, defaultValue: 1 },
  Commission: { type: new DataTypes.FLOAT, defaultValue: 35 },
 },
  {
    sequelize,
    tableName: 'Taxes',
    modelName: 'Taxes',
  }
);

export default Taxes;