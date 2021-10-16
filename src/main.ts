import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/* For this app, we are targeting the browser. So we need to bootstrap for that platform. 
Angular exports a function named platform browser dynamic that can be used for targeting the browser. 
that comes from the platform browser dynamic scope package */
/* module loading syntax supports importing all kinds of exported things from class types 
and functions to constants, variables and even Json file data.*/

import { AppModule } from '.app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
/* Angular exports a function named platform browser dynamic that can be used for targeting the browser */
/* We can pass the app module type into the bootstrap module function call here and we need to import that. */
