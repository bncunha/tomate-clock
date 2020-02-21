import { Component, OnInit, ViewChildren, ElementRef, QueryList, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Output() finish = new EventEmitter();
  @Input() seconds: number;

  time: Date;
  showLeftSide = false;
  
  private maxLeftRotation = 360;
  private maxRightRotation = 0;
  private leftRotation = 0;
  private rightRotation = -180;
  private rotationOffset = 72;
  private clockPulse;
  private isPaused = false;
  constructor() { }

  ngOnInit() {
    this.calcRotationOffset();
    this.time = new Date(0);
  }

  calcRotationOffset() {
  }

  start(timeInSeconds?: number) {
    if (!this.isPaused) {
      this.isPaused = false;
      this.reset(timeInSeconds);
    }

    this.clockPulse = setInterval(() => {
      this.time = new Date(this.time.getTime() - 1000);
      this.moveClock();
      this.isTheEnd(this.clockPulse);
    }, 1000);
  }

  reset(timeInSeconds) {
    this.time = new Date(timeInSeconds ? timeInSeconds * 1000 : this.seconds * 1000);
    this.rotationOffset = 360 / (timeInSeconds ? timeInSeconds : this.seconds);
    this.leftRotation = 0;
    this.rightRotation = -180;
    this.showLeftSide = false;
    this.pause();
  }

  pause() {
    this.isPaused = true;
    clearInterval(this.clockPulse);
  }

  private isTheEnd(interval) {
    if (this.time.getTime() === 0) {
      console.log('Finish  Timer ----> ', new Date());
      clearInterval(interval);
      this.finish.emit();
    }
  }

  private moveClock() {
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

  private getRotationString(side: 'LEFT' | 'RIGHT') {
    return `rotate(${side === 'LEFT' ? this.leftRotation : this.rightRotation}deg)`;
  }

}
