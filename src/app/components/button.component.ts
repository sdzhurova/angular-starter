import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'ButtonComponent',
  providers: [MediaService],
  styleUrls: [
    './button.style.scss'
  ],
  template: `
    <div class="button" (click)="handleClick()" [class.disabled]="disabled">
      <span class="text" *ngIf="!isMobile">{{label}}</span>
      <span class="ico-arrow-right2"></span>
    </div>
  `
})
export class ButtonComponent {
  @Input('label') label: string = '';
  @Input('disabled') disabled: boolean = false;
  @Output() onClick = new EventEmitter();
  mediaViewport: any;
  isMobile: boolean;

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.mediaViewport = this.media.platform.subscribe(value => {
      this.isMobile = (value === 'only mobile');
    });
  }

  handleClick() {
    if (this.disabled) return;
    this.onClick.next(this);
  }
};
