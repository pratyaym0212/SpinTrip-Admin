import axios from 'axios';
import Cars from '../db/Cars.js';
import { token } from '../admin/auth-provider.js'
const CarResource = {  
resource: Cars,
options: {
},
};
export default CarResource;