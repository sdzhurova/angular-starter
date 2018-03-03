import { Component, Input, OnInit, trigger, state, transition, style, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'Home',
  styleUrls: ['./Home.style.scss'],
  animations: [
    trigger('animateButton', [
      state('visible', style({ opacity: '1', visibility: 'visible' })),
      state('invisible', style({ opacity: '0', visibility: 'hidden' })),
      transition('invisible <=> visible', animate('250ms ease-in-out'))
    ])
  ],
  template: `
    <div>
      <ButtonComponent
        label="Say hello"
        bordered="true"
        black="true"
        [@animateButton]="isButtonVisible ? 'visible' : 'invisible'">
      </ButtonComponent>
    </div>
  `
})
export class Home implements OnInit {
  @Input() text: string = '';
  isButtonVisible: boolean = true;

  constructor() { }
  ngOnInit() {

  }
}
