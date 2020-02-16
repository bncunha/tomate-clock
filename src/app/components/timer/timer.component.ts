import { Component, OnInit, ViewChildren, ElementRef, QueryList, Input, Renderer2 } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  showLeftSide = false;
  private maxLeftRotation = 360;
  private maxRightRotation = 0;

  private leftRotation = 0;
  private rightRotation = -180;

  constructor() { }

  ngOnInit() {
    this.moveTimer();
  }

  moveTimer() {
    setInterval(() => {
      if (this.leftRotation < this.maxLeftRotation) {
        this.leftRotation++;
      }
      if (this.rightRotation < this.maxRightRotation) {
        this.rightRotation++;
      } else {
        this.showLeftSide = true;
      }
    }, 10);
  }

  getRotationString(side: 'LEFT' | 'RIGHT') {
    return `rotate(${ side === 'LEFT' ? this.leftRotation : this.rightRotation }deg)`;
  }

}
