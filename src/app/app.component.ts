import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html'
  /*We can add the styles property to the object we are passing to our component decorator*/
  /*This takes an array so we can use a JS array syntax of the double braces*/
  /*In the [] we can set up our style content via strings */
  /*Use '' to write style content on multiple lines; content: CSS*/
    /*array of strings; supporting multiple style strings*/
  styles: ['
  '] ; 
})
export class AppComponent {}
