import axios from 'axios';
import CarAdditionals from '../db/CarAdditional.js';
import { token } from '../admin/auth-provider.js'
import {} from 'dotenv/config'
const CarAdditionalResource = {  
resource: CarAdditionals,
options: {
  actions: {
    ApproveVerification: {
      actionType: 'record',
      component: false,
      handler: (request, response, context) => {
        const { record, currentAdmin } = context;
        try {
          console.log(request);
          const apiUrl = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/admin/approve-carprofile`;
          const postData = {
            carId: request.params.recordId,
          };
          const headers = {
            'Content-Type': 'application/json',
            'token': token,
            // Add any other headers you need
          };
          const apiResponse = axios.put(apiUrl, postData, { headers });
          const responseData = apiResponse.data;
          console.log(apiResponse);
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
export default CarAdditionalResource;