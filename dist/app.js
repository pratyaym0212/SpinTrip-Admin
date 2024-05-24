import express from 'express';
import AdminJS from 'adminjs';
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
import CustomDashboardComponent from './admin/custom.js';
import { useTranslation } from 'adminjs'
//  const Components = {
// // import componentLoader from './admin/component-loader.js';

const port = process.env.PORT || 3000;
const start = async () => {
    const app = express();
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url)); 
    app.use(express.static(path.join(__dirname, "/public")));
    //await initializeDb();
    const customDashboard = {
        component:  CustomDashboardComponent(),
      };
    console.log(customDashboard.component.props);  
    const admin = new AdminJS({
        assets: {
            styles: ["/sidebar.css"],
          },
          branding: {
            companyName: 'SpinTrip',
            logo: '/Spintrip.png',
          },
        dashboard: customDashboard,
        resources: [UserResource, CarResource, BrandResource, PricingResource, CarAdditionalResource, UserAdditionalResource],            
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
    });

    app.use(admin.options.rootPath, router);
    app.listen(port, () => {
        console.log(`AdminJS available at http://54.206.23.199:${port}${admin.options.rootPath}`);
    });

    
};
start();
