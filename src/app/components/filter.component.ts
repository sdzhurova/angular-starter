import { Component, Input, Output, EventEmitter } from '@angular/core';

interface IFilterItem {
  type: any[];
}

@Component({
  selector: 'FilterComponent',
  styleUrls: [
    './filter.style.scss'
  ],
  template: `
    <div class="filter-wrap">
      <h1 class="title">Sort by:</h1>

      <ul class="filter-list">
        <li
          *ngFor="let item of filters; let i = index;"
          class="filter-item"
          [class.disabled]="item.disabled"
          (click)="handleSort(item, i, filters, item.selected)"
        >
            <div class="filter-tag" [class.selected]="item.selected">{{item.label}}</div>
        </li>
      </ul>
    </div>
  `
})
export class FilterComponent {
  @Input('filters') filters: any[] = [];
  @Output() onChange = new EventEmitter<IFilterItem>();

  get getType() {
    return (this.filters || []).find(type => type.selected);
  }

  handleSort(element, index, array, isCurrentlySelected) {
    if (!isCurrentlySelected) {
      // set all to deselected
      array.forEach(child => {
        child.selected = false;
      });

      // set current to selected
      element.selected = true;
    }
    this.onChange.emit({ type: this.getType.value });
  }
};
