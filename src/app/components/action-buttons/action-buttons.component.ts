import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
} from '@angular/animations';
@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  animations: [
    trigger('pauseMove', [
      transition(':enter', [
        style({
          transform: 'translateX(calc(100% - 16px))'
        }),
        animate('0.5s ease'),
      ]),
      // transition(':leave', [
      //   animate('0.5s ease', style({
      //     transform: 'translateX(calc(100% - 16px))'
      //   })),
      // ]),
    ]),
    trigger('resetMove', [
      transition(':enter', [
        style({
          transform: 'translateX(calc(-100% + 16px))'
        }),
        animate('0.5s ease'),
      ]),
      // transition(':leave', [
      //   animate('0.5s ease', style({
      //     transform: 'translateX(calc(-100% + 16px))'
      //   })),
      // ]),
    ]),
    trigger('playMove', [
      // transition(':enter', [
      //   style({position: 'absolute', opacity: 0}),
      //   animate('0.1s 0.1s', style({display: 'initial'})),
      //   animate('1s ease', style({opacity: 1})),
      // ])
    ])
  ]
})
export class ActionButtonsComponent implements OnInit {
  @Output() start = new EventEmitter();
  @Output() stop = new EventEmitter();
  @Output() redo = new EventEmitter();

  @Input() showPlay = true;
  constructor() { }

  ngOnInit() {
  }

  pause() {
    this.showPlay = true;
    this.stop.emit();
  }
  
  play() {
    this.showPlay = false;
    this.start.emit();
  }
  
  reset() {
    this.showPlay = true;
    this.redo.emit();
  }

}
