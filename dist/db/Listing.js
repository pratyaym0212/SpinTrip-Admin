import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Listings extends Model {}

Listings.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
    },
    carid: {
      type: DataTypes.STRING(36),
      primaryKey: true,
    },
    hostid: {
      type: DataTypes.STRING(36),
    },
    details: {
      type: new DataTypes.STRING,
    },
    start_date: {
      type: new DataTypes.DATEONLY, // Use DATEONLY for date without time
      allowNull: true, // Allow null values for optional dates
    },
    start_time: {
      type: new DataTypes.TIME,
      allowNull: true, // Allow null values for optional times
    },
    end_date: {
      type:new DataTypes.DATEONLY,
      allowNull: true,
    },
    end_time: {
      type: new DataTypes.TIME,
      allowNull: true,
    },
    pausetime_start_date: {
      type: new DataTypes.DATEONLY,
      allowNull: true,
    },
    pausetime_end_date: {
      type: new DataTypes.DATEONLY,
      allowNull: true,
    },
    pausetime_start_time: {
      type: new DataTypes.TIME,
      allowNull: true,
    },
    pausetime_end_time: {
      type: new DataTypes.TIME,
      allowNull: true,
    },
    latitude: { type: new DataTypes.FLOAT, allowNull: true, },
    longitude: { type: new DataTypes.FLOAT, allowNull: true, }
  },
  {
    sequelize,
    tableName: 'Listings',
    modelName: 'Listings',
  }
);

export default Listings;