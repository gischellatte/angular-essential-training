import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html'
  /*We can add the styles property to the object we are passing to our component decorator*/
  /*This takes an array so we can use a JS array syntax of the double braces*/
  /*In the [] we can set up our style content via strings */
  /*Use '' to write style content on multiple lines; content: CSS*/
    /*array of strings; supporting multiple style strings*/
  /* the style URLs property works with string values that point to a file that contains the style content.*/
  styleUrls:
  /* change the property to be style URL*/
  /* if we needed to, we could add multiple CSS files to our component, and then simply add them to the array that we set to the style URLs property.*/
  ['./app.component.css'] ; 
})
export class AppComponent {}
