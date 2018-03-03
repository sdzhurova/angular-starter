import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'FilterComponent',
  providers: [MediaService],
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
  @Output() onClick = new EventEmitter();

  constructor(private media: MediaService) { }

  ngOnInit() {
  }

  handleSort(element, index, array, isCurrentlySelected) {
    if (!isCurrentlySelected) {
      // set all to deselected
      array.forEach(child => {
        child.selected = false;
      });

      element.selected = true;
    }
  }
};
