import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Bookings extends Model {}

Bookings.init(
  {
    Bookingid: {
      type: DataTypes.STRING(36),
      primaryKey: true,
    },
    Date: {
      type: new DataTypes.DATEONLY,
      allowNull: true,
    },
    carid: {
      type: new DataTypes.STRING(36),
      allowNull: true,
    },
    id: {
      type: new DataTypes.STRING(36),
      allowNull: true,
    },
    status: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    amount: {
      type: new DataTypes.FLOAT,
      allowNull: true,
    },
    Transactionid: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    startTripDate: {
      type: new DataTypes.DATEONLY,
      allowNull: true,
    },
    endTripDate: {
      type: new DataTypes.DATEONLY,
      allowNull: true,
    },
    startTripTime: {
      type: new DataTypes.TIME,
      allowNull: true,
    },
    endTripTime: {
      type: new DataTypes.TIME,
      allowNull: true,
    },

  },
  {
    sequelize,
    tableName: 'Bookings',
    modelName: 'Bookings',
  }
);

export default Bookings;