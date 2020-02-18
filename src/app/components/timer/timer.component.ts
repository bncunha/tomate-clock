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

  private rotationOffset = 72;

  constructor() { }

  ngOnInit() {
    this.moveTimer();
  }

  moveTimer() {
    this.rotationOffset = 360 / 120;
    console.log(new Date());
    const interval = setInterval(() => {
      if (this.leftRotation < this.maxLeftRotation) {
        this.leftRotation += (this.leftRotation + this.rotationOffset) < this.maxLeftRotation ?
                              this.rotationOffset : (this.leftRotation - this.maxLeftRotation) * -1;
      }
      if (this.rightRotation < this.maxRightRotation) {
        this.rightRotation += (this.rightRotation + this.rotationOffset) < this.maxRightRotation ?
                            this.rotationOffset : (this.rightRotation - this.maxRightRotation) * -1;
      } else {
        this.showLeftSide = true;
      }
      if (this.leftRotation === this.maxLeftRotation) {
        console.log(new Date());
        clearInterval(interval);
      }
    }, 1000);
  }

  getRotationString(side: 'LEFT' | 'RIGHT') {
    return `rotate(${side === 'LEFT' ? this.leftRotation : this.rightRotation}deg)`;
  }

}
