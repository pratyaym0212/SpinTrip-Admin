import { DefaultAuthProvider } from 'adminjs';
import componentLoader from './component-loader.js';
import { Admins } from '../db/Admin.js';
import axios from 'axios';
import  Users  from '../db/User.js';
let token;
const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {
    try {
      const apiUrl = 'http://localhost:2000/api/admin/verify-otp';
      const postData = {
        phone: email,
        otp: password,
      };
      const apiResponse = await axios.post(apiUrl, postData);
      const responseData = apiResponse.data;
      token =  apiResponse.data.token;
      if (token) {
        // Authentication successful
        return { email };
      } else {
        // Authentication failed
        return null;
      }
    } catch (error) {
      // Handle any potential errors during the authentication process
      console.error('Authentication error:', error.message);
      return null;
    }
  },
});




export { provider, token };
