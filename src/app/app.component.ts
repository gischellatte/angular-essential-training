import { Component } from '@angular/core';

@Component({
  selectorurl: 'mw-app',
  template: './app.component.html'
  /* This is an inline template. The markup is declared within the component metadata. */
  /*  Using the template metadata property is an easy way to compose our angular components and 
  we can use back ticks around the inline template value here, 
  instead of single quotes, and start moving things to multiple lines for better readability.*/
})
export class AppComponent {}
