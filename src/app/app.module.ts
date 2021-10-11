import {/*types we want to import, this is also marks that we want to do Angular*/ NgModule 
} from '@angular/core';
/*the from shows the path to the file*/
import { BrowserModule } from '@angular/platform-browser';
/*browser module contains core directives, pipes, and more for working with the DOM*/
import { AppComponent } from './app.component';


@NgModule({
  imports: [
  BrowserModule
  ],
  /* imports property is used to bring in other Angular modules that your module will need.*/
  declarations: [AppComponent
  ],
  /* declarations property is used to make components, directives, and pipes available to your module 
  that don't come from another module. */
  /*we want to add the app component to the declarations property as it 
  is a component that we want to make available to the Angular module.*/
  bootstrap: [AppComponent
  ];
  /* bootstrap property is used for a root module and 
  we'll let Angular know which component or components will be the starting point for the bootstrap process.*/ 
  /*  Entry point for your app code. */ 
  /*  we need to add the app component to the bootstrap property as well. 
      Since this app module is being used as the root module*/
})
export class AppModule{}
/*we are building this module in its own file and we want to import into another file, 
we need to provide support for using the module loading syntax.
By using the export keyword in front of the class keyword.*/
