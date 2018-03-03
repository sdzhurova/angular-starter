import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'TileItemComponent',
  providers: [MediaService],
  styleUrls: ['./tile-item.style.scss'],
  template: `
    <section class="tile-item-wrap">
      <h1 class="title">{{name}}</h1>

      <div class="speed">
        <div class="speed-item">
          <span class="icon ico-download"></span>
          <span class="label">Download: </span>
          <span class="value">{{downloadSpeed}} {{mbit}}</span>
        </div>
        <div class="speed-item" *ngIf="!isMobile">
          <span class="icon ico-upload"></span>
          <span class="label">Upload: </span>
          <span class="value">{{uploadSpeed}} {{mbit}}</span>
        </div>
      </div>

      <div class="benefits">
        <span class="benefits" *ngFor="let item of benefits">{{item}}</span>
      </div>

      <div class="cost-wrap">
        <div class="cost">{{cost}}</div>
        <ButtonComponent
          label="To Tariff"
          icon={}
        >
        </ButtonComponent>
      </div>
    </section>
    `
})
export class TileItemComponent {
  @Input() name: string;
  @Input() downloadSpeed: string;
  @Input() uploadSpeed: string;
  @Input() cost: string;
  @Input() benefits: any[];
  @Input('open-link') openLink: string;
  mbit: string = 'Mbit/s';
  mediaViewport: any;
  isMobile: boolean;

  constructor(
    private media: MediaService,
  ) { }

  ngOnInit() {
    this.mediaViewport = this.media.platform.subscribe(value => {
      this.isMobile = (value === 'only mobile');
    });
  }

}


