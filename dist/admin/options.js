//import componentLoader from './component-loader.js';
import AdminJS from 'adminjs';

import Users from '../db/Users.js';
import Cars from '../db/Cars.js';
//import CarAdditionalsComponent from '../db/CarAdditionalComponent.js';
import CarAdditionals from '../db/CarAdditional.js';
import Pricings from '../db/Pricing.js';
import Brands from '../db/Brands.js';
//import UserResources from '../Resources/UserResources.js';

//CarAdditionalsComponent();
const options = {
  assets: {
    styles: ["/sidebar.css"],
  },
  branding: {
    companyName: 'SpinTrip',
    logo: '/Spintrip.png',
  },
  resources: [
    {
      resource: Cars,
      options: {
        actions: {
          edit: {
            isAccessible: false,
            isVisible: true,
          },
        },
      },
    },
    {
      resource: Users,
    },
    {
      resource: Pricings,
    },
    {
      resource: Brands,
    },
    {   
        resource: CarAdditionals,
        options: {
            actions: {
              new: {
                isAccessible: true,
                handler: async (request, response, context) => {
                  response.record = {};
                  return context.continue();
                },
              },
              // Custom action for editing an existing user
              edit: {
                isAccessible: true,
                handler: async (request, response) => {
                    console.log(request);
                    
                    return request;
                  },
              },
              // Custom action for deleting a user
              delete: {
                isAccessible: true,
                handler: async (request, response, context) => {
                  // Implement your logic to handle the deletion of a user
                  response.record = {};
                  return context.continue();
                },
              },
            },
          },
    },
  ],
};


export default options;

// Create a custom provider that supplies data to AdminJS
// class CustomProvider {
//   constructor(data) {
//     this.data = data;
//   }

//   async find(resource, _filter, options) {
//     const { sort, limit, offset } = options;
//     const sortedData = this.sortData(this.data, sort);
//     const slicedData = sortedData.slice(offset, offset + limit);
//     const totalCount = this.data.length;

//     return {
//       data: slicedData,
//       count: totalCount,
//       total: totalCount,
//     };
//   }

//   async findOne(resource, params, options) {
//     const item = this.data.find((dataItem) => dataItem.id === params.id);
//     return { data: item };
//   }

//   async sortData(data, sort) {
//     if (!sort) {
//       return data;
//     }

//     const [sortBy, sortOrder] = sort.split(':');
//     const sortedData = data.sort((a, b) => {
//       if (sortOrder === 'asc') {
//         return a[sortBy] > b[sortBy] ? 1 : -1;
//       } else {
//         return a[sortBy] < b[sortBy] ? 1 : -1;
//       }
//     });

//     return sortedData;
//   }
// }

// // Create AdminJS resource
// const options = {
//   resources: [
//     {
//       resource: {
//         options: {
//           properties: {
//             id: { isVisible: { list: true } },
//             phone: { isVisible: { list: true } },
//             password: { isVisible: { list: false } },
//             role: { isVisible: { list: true } },
//             otp: { isVisible: { list: true } },
//             timestamp: { isVisible: { list: true } },
//             status: { isVisible: { list: true } },
//             rating: { isVisible: { list: true } },
//             createdAt: { isVisible: { list: true } },
//             updatedAt: { isVisible: { list: true } },
//             BookingBookingid: { isVisible: { list: true } },
//           },
//         },
//       },
//     },
//   ],
// };

// export default options;