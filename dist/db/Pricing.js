import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Pricings extends Model {}

Pricings.init(
  {
    carid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    costperhr: {
      type: new DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Pricings',
    modelName: 'Pricings',
  }
);

export default Pricings;