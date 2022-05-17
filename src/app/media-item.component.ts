import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  /* We will remove textContent from the h tag as we won't be needing it going forward and same for the wasWatched content*/
  /*name = 'The Redemption';

  wasWatched() {
    return true;
  }*/
}
