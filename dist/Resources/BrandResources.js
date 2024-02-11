import axios from 'axios';
import Brands from '../db/Brands.js';
import { token } from '../admin/auth-provider.js'
import {} from 'dotenv/config'
const BrandResource = {  
resource: Brands,
options: {
  actions: {
    new: {
      handler: (request, response, context) => {
        const { record, currentAdmin } = context;
        try {
          console.log(request);
          const apiUrl = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/admin/brand`;
          const headers = {
            'Content-Type': 'application/json',
            'token': token,
            // Add any other headers you need
          };
          const postData = {
              "data": [
                {
                  "type": request.payload.type,
                  "brand": request.payload.brand,
                  "carmodel": request.payload.carmodel,
                  "brand_value": request.payload.brand_value,
                  "base_price": request.payload.base_price
                }
              ]
            
          };
          const apiResponse = axios.put(apiUrl, postData, { headers });
          return {
            record: record.toJSON(currentAdmin),
            msg: 'Hello world',
          };
        } catch (error) {
          console.error('Error fetching data:', error);
          return {
            record: record.toJSON(currentAdmin),
            msg: 'An error occurred',
          };
        }
      },
    },
    edit: {
      handler: (request, response, context) => {
        const { record, currentAdmin } = context;
        try {
          console.log(request);
          const apiUrl = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/admin/update_brand`;
          const postData = {

                 "id": request.payload.id,
                  "brand_value": request.payload.brand_value,
                  "base_price": request.payload.base_price
            
          };
          const headers = {
            'Content-Type': 'application/json',
            'token': token,
            // Add any other headers you need
          };
          const apiResponse = axios.put(apiUrl, postData, { headers });
          return {
            record: record.toJSON(currentAdmin),
            msg: 'Hello world',
          };
        } catch (error) {
          console.error('Error fetching data:', error);
          return {
            record: record.toJSON(currentAdmin),
            msg: 'An error occurred',
          };
        }
      },
    },
  },
},
};
export default BrandResource;