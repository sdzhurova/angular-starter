import { Component, Input, Output, EventEmitter } from '@angular/core';

enum IconPosition {
  Left, Right
}

@Component({
  selector: 'ButtonComponent',
  styleUrls: [
    './button.style.scss'
  ],
  template: `
    <div
      class="button" role="button"
      (click)="handleClick()"
      [class.primary]="primary"
      [class.secondary]="secondary"
      [class.black]="black"
      [class.white]="white"
      [class.disabled]="disabled"
      [class.bordered]="bordered"
      [ngClass]="icon"
      [class.icon-left]="isIconLeft"
      [class.icon-right]="isIconRight"
    >
      {{label}}
    </div>
  `
})
export class ButtonComponent {
  @Input('label') label: string = '';
  @Input('primary') primary: boolean = false;
  @Input('secondary') secondary: boolean = false;
  @Input('black') black: boolean = false;
  @Input('white') white: boolean = false;
  @Input('disabled') disabled: boolean = false;
  @Input('bordered') bordered: boolean = false;
  @Input('icon') icon: string = '';
  @Input('icon-position') iconPosition: string = 'Left';
  @Output() onClick = new EventEmitter();

  get isIconLeft(): boolean {
    return this.icon && IconPosition[this.iconPosition] === IconPosition.Left;
  }

  get isIconRight(): boolean {
    return this.icon && IconPosition[this.iconPosition] === IconPosition.Right;
  }

  handleClick() {
    if (this.disabled) return;
    this.onClick.next(this);
  }
};
