import { DataTypes, Model } from 'sequelize';
import sequelize from './config.js';

class Chats extends Model {}

Chats.init(
  {
    bookingId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    senderId: {
      type: new DataTypes.UUID,
      allowNull: true,
    },
    receiverId: {
      type: new DataTypes.UUID,
      allowNull: true,
    },
    message: {
      type: new DataTypes.TEXT,
      allowNull: true,
    },
    flagged: {
      type: new DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Chats',
    modelName: 'Chats',
  }
);

export default Chats;