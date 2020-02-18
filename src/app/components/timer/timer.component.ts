import { Component, OnInit, ViewChildren, ElementRef, QueryList, Input, Renderer2 } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() seconds: number;

  time: Date;
  showLeftSide = false;
  
  private maxLeftRotation = 360;
  private maxRightRotation = 0;

  private leftRotation = 0;
  private rightRotation = -180;

  private rotationOffset = 72;

  constructor() { }

  ngOnInit() {
    this.calcRotationOffset();
    this.start();
  }

  calcRotationOffset() {
    const circleDeg = 360;
    this.rotationOffset = circleDeg / this.seconds;
  }

  start() {
    console.log('Init Timer ----> ', new Date());
    this.time = new Date(this.seconds * 1000);
    const interval = setInterval(() => {
      this.time = new Date(this.time.getTime() - 1000);
      this.moveClock();
      this.isTheEnd(interval);
    }, 1000);
  }

  private isTheEnd(interval) {
    if (this.time.getTime() === 0) {
      console.log('Finish  Timer ----> ', new Date());
      clearInterval(interval);
    }
  }

  moveClock() {
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
  }

  getRotationString(side: 'LEFT' | 'RIGHT') {
    return `rotate(${side === 'LEFT' ? this.leftRotation : this.rightRotation}deg)`;
  }

}
