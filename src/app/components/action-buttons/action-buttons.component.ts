import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  animations: [
    trigger('toLeft', [
      transition(':enter', [
        style({
          transform: 'translateX(calc(100% - 16px))'
        }),
        animate('0.5s ease'),
      ]),
    ]),
    trigger('toRight', [
      transition(':enter', [
        style({
          transform: 'translateX(calc(-100% + 16px))'
        }),
        animate('0.5s ease'),
      ])
    ]),
  ]
})
export class ActionButtonsComponent implements OnInit {
  @Input() showPlay = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('s')
      this.showPlay = false;
    }, 1000);
  }

}
