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

  focusTime = 1500;
  shorBreak = 300;
  longBreak = 900;
  // focusTime = 4;
  // shorBreak = 2;
  // longBreak = 3;

  numberCycle = 1;
  typeCycle: 'focus' | 'long' | 'short' = 'focus';
  audio: HTMLAudioElement;
  audioPlaying = false;

  startPomodoro() {
    this.stopAudio();
    this.timer.start(this.getTimeConfigByType(this.typeCycle));
  }

  pausePomodoro() {
    this.stopAudio();
    this.timer.pause();
  }

  resetPomodoro(stopAudio = true, typeCycle?) {
    if (stopAudio) {
      this.stopAudio();
    }
    this.timer.reset(this.getTimeConfigByType(typeCycle ? typeCycle : this.typeCycle));
  }

  nextCycle() {
    this.playAudio();
    this.actionButtons.showPlay = true;
    if (this.numberCycle == 4) {
      this.typeCycle = 'long';
      this.numberCycle++;
    } else if (this.numberCycle == 5) {
      this.typeCycle = 'focus';
      this.numberCycle = 1;
    } else {
      if (this.typeCycle == 'short') {
        this.numberCycle++;
      }
      this.typeCycle = this.typeCycle == 'focus' ? 'short' : 'focus';
    }
    this.resetPomodoro(false);
  }

  playAudio() {
    this.audioPlaying = true;
    this.audio = new Audio('assets/alarm.mp3');
    this.audio.play();
    this.audio.addEventListener('ended', () => {
      if (this.audioPlaying) {
        this.audio.play();
      }
    });
  }

  stopAudio() {
    this.audioPlaying = false;
    if (this.audio) {
      this.audio.pause();
    }
  }

  get textCycle() {
    switch(this.typeCycle) {
      case 'focus': return 'Fique focado!';
      case 'short': return 'Hora de relaxar...';
      case 'long': return 'Você trabalhou bastante. Tire um descanso maior!';
    }
  }

  getTimeConfigByType(type: 'focus' | 'long' | 'short') {
    switch(type) {
      case 'focus': return this.focusTime;
      case 'long': return this.longBreak;
      case 'short': return this.shorBreak;
    }
  }
}
