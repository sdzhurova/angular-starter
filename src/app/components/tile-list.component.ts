import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'TileListComponent',
  styleUrls: [
    './tile-list.style.scss'
  ],
  template: `
    <div class="tile-list-wrap">
      <ng-content></ng-content>
    </div>
  `
})
export class TileListComponent {
};
