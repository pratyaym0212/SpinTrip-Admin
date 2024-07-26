import { ValidationError } from 'adminjs';
import Chats from '../db/Chats.js'; // Adjust path as per your project structure

const ChatResource = {
  resource: Chats,
  options: {
    listProperties: ['bookingId'], // Only display bookingId in the list view
    actions: {
      list: {
        handler: async (request, response, context) => {
          try {
            // Fetch unique booking IDs as plain JavaScript objects
            const uniqueBookingIds = await Chats.findAll({
              attributes: ['bookingId'],
              group: ['bookingId'],
              raw: true,
            });

            // Validate data
            console.log('Unique Booking IDs:', uniqueBookingIds); // Debug log

            if (!Array.isArray(uniqueBookingIds)) {
              throw new ValidationError({
                message: 'Failed to fetch chat records. Expected an array.',
                type: 'custom',
                base: request.query,
                fieldErrors: {},
              });
            }

            // Map unique booking IDs to AdminJS-compatible records
            const records = uniqueBookingIds.map(booking => ({
              id: booking.bookingId,
              title: `Booking ID: ${booking.bookingId}`, // Ensure title is present
              params: {
                bookingId: booking.bookingId,
              },
            }));

            console.log('Mapped Records:', records); // Debug log

            response.json({
              records,
              meta: {
                total: records.length,
              },
            });
          } catch (error) {
            console.error('Error fetching chat records:', error); // Debug log
            throw new ValidationError({
              message: 'Failed to fetch chat records.',
              type: 'custom',
              base: request.query,
              fieldErrors: {},
            });
          }
        },
      },
      show: {
        handler: async (request, response, context) => {
          try {
            const { recordId } = request.params;

            // Fetch all chats for the selected bookingId as plain JavaScript objects
            const chats = await Chats.findAll({ where: { bookingId: recordId }, raw: true });

            // Validate data
            console.log('Fetched Chats:', chats); // Debug log

            if (!Array.isArray(chats)) {
              throw new ValidationError({
                message: 'Failed to fetch chat details. Expected an array.',
                type: 'custom',
                base: request.params,
                fieldErrors: {},
              });
            }

            // Map fetched chats to AdminJS-compatible records
            const records = chats.map(chat => ({
              id: chat.id,
              params: {
                bookingId: chat.bookingId,
                senderId: chat.senderId,
                receiverId: chat.receiverId,
                message: chat.message,
                flagged: chat.flagged,
                createdAt: chat.createdAt,
              },
            }));

            console.log('Mapped Chat Details:', records); // Debug log

            response.json({
              record: {
                id: recordId,
                populated: {
                  chats: records,
                },
              },
            });
          } catch (error) {
            console.error('Error fetching chat details:', error); // Debug log
            throw new ValidationError({
              message: 'Failed to fetch chat details.',
              type: 'custom',
              base: request.params,
              fieldErrors: {},
            });
          }
        },
      },
    },
  },
};

export default ChatResource;
