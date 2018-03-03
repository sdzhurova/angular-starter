import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'Home',
  styleUrls: ['./Home.style.scss'],
  template: `
    <div>
      <FilterComponent [filters]="filterList"></FilterComponent>

      <TileListComponent #list [list]="tariffList">
        <TileItemComponent
          *ngFor="let item of list.visibleTiles"
          [name]="item.name"
          [downloadSpeed]="item.downloadSpeed"
          [uploadSpeed]="item.uploadSpeed"
          [cost]="item.cost"
          [benefits]="item.benefits"
          [class.is-small]="!item.number"
          [open-link]="['/tariff', item.id]">
        </TileItemComponent>
      </TileListComponent>
    </div>
  `
})
export class Home implements OnInit {
  private tariffList: any[] = [
    {
      id: '1',
      name: 'name 1',
      downloadSpeed: 'downloadSpeed',
      uploadSpeed: 'uploadSpeed',
      cost: 'cost',
      benefits: [
        'Benefit 1',
        'Benefit 2',
        'Benefit 3',
      ],
    },
    {
      id: '2',
      name: 'name 2',
      downloadSpeed: 'downloadSpeed',
      uploadSpeed: 'uploadSpeed',
      cost: 'cost',
      benefits: [
        'Benefit 1',
        'Benefit 2',
        'Benefit 3',
      ],
    },
  ];

  private filterList: any[] = [
    {
      label: 'Download Speed',
      value: '',
    }, {
      label: 'Price',
      value: '',
    },
  ];

  ngOnInit() {
    // console.log('====================================');
    // console.log(this.tariffList);
    // console.log('====================================');
  }
}







