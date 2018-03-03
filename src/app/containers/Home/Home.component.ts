import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { FakeService } from '../../services/fake.service';
import { FakeData } from '../models/fake-data.model';

const SORT_BY_PRICE = 'price';
const SORT_BY_DOWLOAD_SPEED = 'download-speed';
const SORT_BY_CAMPAIGN_END_DATE = 'campaign-end-date';

@Component({
  selector: 'Home',
  providers: [FakeService],
  styleUrls: ['./Home.style.scss'],
  template: `
    <div>
      <FilterComponent
        [filters]="filterList"
        (onChange)="filterChange($event);"
      >
      </FilterComponent>

      <TileListComponent>
        <TileItemComponent
          *ngFor="let item of offers"
          [rank]="item.rank"
          [name]="item.product.content.text"
          [downloadSpeed]="item.contractTerm.downloadSpeed.content.text"
          [uploadSpeed]="item.contractTerm.uploadSpeed.content.text"
          [cost]="item.cost.effectiveCost.content.text"
          [benefits]="item.remarks"
          [open-link]="['/tariff', item.rank]">
        </TileItemComponent>
      </TileListComponent>
    </div>
  `
})
export class Home implements OnInit {
  offers: any[];
  private filterList: any[] = [
    {
      label: 'Download Speed',
      value: 'download-speed',
      disabled: false,
    },
    {
      label: 'Price',
      value: 'price',
      disabled: false,
    },
    {
      label: 'Campaign End Date',
      value: 'campaign-end-date',
      disabled: true,
    },
  ];
  isSortedAsc = true;

  constructor(private fakeService: FakeService) { }

  ngOnInit() {
    this.fakeService.fetchAllData().subscribe(offers => { this.offers = offers; });
  }

  filterChange(filters) {
    if (filters.type === SORT_BY_DOWLOAD_SPEED) {
      // sort by download speed
      this.offers.sort((a, b) => {
        let aSpeed = a.contractTerm.downloadSpeed.amount;
        let bSpeed = b.contractTerm.downloadSpeed.amount;
        return this.isSortedAsc ? aSpeed - bSpeed : bSpeed - aSpeed;
      });

      this.isSortedAsc = !this.isSortedAsc;
    } else if (filters.type === SORT_BY_PRICE) {
      // sort by price
      this.offers.sort((a, b) => {
        let aAmount = a.cost.effectiveCost.amount;
        let bAmount = b.cost.effectiveCost.amount;
        return this.isSortedAsc ? aAmount - bAmount : bAmount - aAmount;
      });
      this.isSortedAsc = !this.isSortedAsc;
    } else if (filters.type === SORT_BY_CAMPAIGN_END_DATE) {
      // TODO - sort by campaign end date
    }
  }
}
