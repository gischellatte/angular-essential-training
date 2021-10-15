import {Component} from '@angular/core';
/*angular core is used to build angular*/
/*to decorate a component, you need to provide two metadata properties at a minimum: selector and template or template URL. */
@Component({
 /*Component decorator takes metadata object with some known properties to configure the class you decorate as an Angular component*/

selector: 'app-root', /*used to located custom HTML element and apply component*/
/*pass in an object literal inside the component decorator parentheses*/
/*selector property is what Angular will use to locate a custom HTML element and apply the component to*/  
template: '<h1>My App</h1>'
/*To decorate a component, you need to provide two metadata properties at a minimum: selector and template or template URL. */  
})
export class AppComponent {
/**/
} 
