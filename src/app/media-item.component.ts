/*Support multiple import items*/
/*So, we can add input to the list*/
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  /*Tell Angular that we want it to support any property bindings placed on the instances 
   of the mw-media-item elements
  Property name: Media Item */
  @Input() mediaItem;
  
  onDelete() {
    console.log('deleted');
  }
}
