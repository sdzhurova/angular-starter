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
  filteredOffers: any[] = [];
  private _list: any[];

  @Input() set list(value: any[]) {
    this.setList(value);
  };

  setList(value) {
    this._list = value;

    value && value.forEach((item, index) => {
      this.filteredOffers.push(item);
    });
  }

  get list(): any[] {
    return this._list;
  }

  ngOnInit() { }
};
