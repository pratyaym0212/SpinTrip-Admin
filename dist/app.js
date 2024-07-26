import express from 'express';
import AdminJS from 'adminjs';
import initializeDb from './db/index.js';
import { ComponentLoader } from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import { provider, token } from './admin/auth-provider.js';
import path from 'path';
import * as url from 'url'
import UserResource from './Resources/UserResources.js';
import CarResource from './Resources/CarResources.js';
import BrandResource from './Resources/BrandResources.js';
import CarAdditionalResource from './Resources/CarAdditionalResources.js';
import PricingResource from './Resources/PricingResource.js';
import UserAdditionalResource from './Resources/UserAdditionalResources.js';
import { useTranslation } from 'adminjs'
import BookingResource from './Resources/BookingsResources.js';
import ChatResource from './Resources/Chat.js';
import ListingsResource from './Resources/ListingsResources.js';
import TaxResource from './Resources/TaxResources.js';
import fs from 'fs';
//import { ComponentLoader } from 'adminjs';
//import { CustomDashboard } from './admin/build/custom.js'; 
//  const Components = {
// // import componentLoader from './admin/component-loader.js';

const port = process.env.PORT || 3000;
const start = async () => {
  const app = express();
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  app.use(express.static(path.join(__dirname, "/public")));
  //await initializeDb();
  let componentLoader = new ComponentLoader();
  const dashboardPath = path.resolve(__dirname, './component/CustomDashboard.jsx').replace(/\\/g, '/');
  console.log('Dashboard Path:', dashboardPath);
  if (!fs.existsSync(dashboardPath)) {
    throw new Error(`Dashboard component file does not exist at ${dashboardPath}`);
  }
  const supportPath = path.resolve(__dirname, './component/SupportChannel.jsx').replace(/\\/g, '/');
  // const SupportChannelComponent = componentLoader.add('SupportChannelComponent', path.join(__dirname, './components/SupportChannel'));
  const Components = {
    CustomDashboard: componentLoader.add('CustomDashboard', dashboardPath),
    // other custom components
  }
  const Components1 = {
    SupportChannelComponent: componentLoader.add('SupportChannel', supportPath),
    // other custom components
  }

  const admin = new AdminJS({
    assets: {
      styles: ['/sidebar.css', // Keep your existing sidebar.css
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      ],
    },
    branding: {
      companyName: 'SpinTrip',
      logo: '/Spintrip.png',
    },
    dashboard: {
      component: Components.CustomDashboard,
    },
    pages: {
      support: {
        label: 'Support',
        component: Components1.SupportChannelComponent, // Set your custom component as a new page
      },
    },
    componentLoader,
    resources: [UserResource, CarResource, BrandResource, PricingResource, CarAdditionalResource, UserAdditionalResource, BookingResource, ChatResource, ListingsResource, TaxResource],
    rootPath: '/admin',
  });

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  }
  else {
    admin.watch();
  }
  const router = buildAuthenticatedRouter(admin, {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
  }, null, {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
      cookie: {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // Set to true if your site uses HTTPS
          maxAge: 60000, // 1 minute for testing, adjust as needed
      },
  });
  
  app.use(admin.options.rootPath, router);
  app.listen(port, () => {
    console.log(`AdminJS available at http://54.206.23.199:${port}${admin.options.rootPath}`);
  });


};
start();
