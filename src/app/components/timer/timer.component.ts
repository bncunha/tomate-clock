import { Component, OnInit, ViewChildren, ElementRef, QueryList, Input, Renderer2 } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() seconds: number;

  showLeftSide = false;
  private maxLeftRotation = 360;
  private maxRightRotation = 0;

  private leftRotation = 0;
  private rightRotation = -180;

  private rotationOffset = 72;

  constructor() { }

  ngOnInit() {
    this.calcRotationOffset();
    this.moveTimer();
  }

  calcRotationOffset() {
    const circleDeg = 360;
    this.rotationOffset = circleDeg / this.seconds;
  }

  moveTimer() {
    console.log('Init Timer ----> ', new Date());
    const interval = setInterval(() => {
      if (this.leftRotation < this.maxLeftRotation) {
        this.leftRotation += (this.leftRotation + this.rotationOffset) < this.maxLeftRotation ?
                              this.rotationOffset : (this.leftRotation - this.maxLeftRotation) * -1;
      }
      if (this.rightRotation < this.maxRightRotation) {
        if (this.rightRotation + this.rotationOffset < this.maxRightRotation) {
          this.rightRotation += this.rotationOffset;
        } else {
          const lastRightRotation = this.rightRotation - this.maxRightRotation;
          this.rightRotation += lastRightRotation * -1;
          this.leftRotation += this.rotationOffset + lastRightRotation;
          this.showLeftSide = true;
        }
      } else {
        this.showLeftSide = true;
      }
      if (this.leftRotation === this.maxLeftRotation) {
        console.log('Finish  Timer ----> ', new Date());
        clearInterval(interval);
      }
    }, 1000);
  }

  getRotationString(side: 'LEFT' | 'RIGHT') {
    return `rotate(${side === 'LEFT' ? this.leftRotation : this.rightRotation}deg)`;
  }

}
