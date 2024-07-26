import { DefaultAuthProvider } from 'adminjs';
import componentLoader from './component-loader.js';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
let token;

export const setToken = (token) => {
    localStorage.setItem('authToken', token);
};

export const getToken = () => {
    return localStorage.getItem('authToken');
};

export const removeToken = () => {
    localStorage.removeItem('authToken');
};

const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }, { res }) => {
    try {
      const apiUrl = 'http://localhost:2000/api/admin/verify-otp';
      const postData = {
        phone: email,
        otp: password,
      };
      const apiResponse = await axios.post(apiUrl, postData);
      token = apiResponse.data.token;
      console.log('Token received:', token); // Debugging log // 
      // console.log(localStorage);

      // Set the token in cookies
      return { token };
    } catch (error) {
      console.error('Authentication error:', error.message);
      return null;
    }
  },
});

export { provider, token };
