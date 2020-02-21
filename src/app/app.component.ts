import { Component, ViewChild } from '@angular/core';
import { TimerComponent } from './components/timer/timer.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TimerComponent) timer: TimerComponent;
  @ViewChild(ActionButtonsComponent) actionButtons: ActionButtonsComponent;
  title = 'tomate-clock';

  // focusTime = 1500;
  // shorBreak = 300;
  // longBreak = 900;
  focusTime = 4;
  shorBreak = 2;
  longBreak = 3;

  numberCycle = 1;
  typeCycle: 'focus' | 'long' | 'short' = 'focus';

  startPomodoro() {
    this.timer.start(this.getTimeConfigByType(this.typeCycle));
  }

  pausePomodoro() {
    this.timer.pause();
  }

  resetPomodoro() {
    this.timer.reset(this.getTimeConfigByType(this.typeCycle));
  }

  nextCycle() {
    this.actionButtons.showPlay = true;
    if (this.numberCycle == 4) {
      this.typeCycle = 'long';
      this.numberCycle = 1;
    } else {
      if (this.typeCycle == 'short') {
        this.numberCycle++;
      }
      this.typeCycle = this.typeCycle == 'focus' ? 'short' : 'focus';
    }
    this.resetPomodoro();
  }

  getTimeConfigByType(type: 'focus' | 'long' | 'short') {
    switch(type) {
      case 'focus': return this.focusTime;
      case 'long': return this.longBreak;
      case 'short': return this.shorBreak;
    }
  }
}
