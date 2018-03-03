import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { FakeService } from '../../services/fake.service';
import { FakeData } from '../models/fake-data.model';

@Component({
  selector: 'Home',
  providers: [FakeService],
  styleUrls: ['./Home.style.scss'],
  template: `
    <div>
      <FilterComponent [filters]="filterList"></FilterComponent>

      <TileListComponent #list [list]="offers">
        <TileItemComponent
          *ngFor="let item of list.filteredOffers"
          [name]="item.rank"
          [downloadSpeed]="item.contractTerm.downloadSpeed.content.text"
          [uploadSpeed]="item.contractTerm.uploadSpeed.content.text"
          [cost]="item.cost.effectiveCost.content.text"
          [benefits]="item.remarks"
          [open-link]="['/tariff', item.rank]">
        </TileItemComponent>
      </TileListComponent>

      <div class="red" *ngFor="let offer of offers;">
        simona - {{offer.provider.id}}
      </div>
    </div>
  `
})
export class Home implements OnInit {
  private filterList: any[] = [
    {
      label: 'Download Speed',
      value: 'download-speed',
    }, {
      label: 'Price',
      value: 'price',
    },
  ];
  offers: any[];

  constructor(private fakeService: FakeService) { }

  ngOnInit() {
    this.fakeService.fetchAllData().subscribe(offers => { this.offers = offers; });
  }
}







