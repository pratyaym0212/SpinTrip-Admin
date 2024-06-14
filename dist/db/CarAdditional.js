import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class CarAdditionals extends Model { }

CarAdditionals.init(
  {
    carid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    HorsePower: {
      type: new DataTypes.INTEGER,
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
    PetFriendly: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    PowerSteering: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    ABS: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    tractionControl: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    fullBootSpace: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    KeylessEntry: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    airPurifier: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    cruiseControl: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    voiceControl: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    usbCharger: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    bluetooth: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    airFreshner: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    ventelatedFrontSeat: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    Additionalinfo: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
    carimage1: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    carimage2: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    carimage3: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    carimage4: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    carimage5: {
      type: new DataTypes.STRING,
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