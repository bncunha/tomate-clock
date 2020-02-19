import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { CycleCounterComponent } from './components/cycle-counter/cycle-counter.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CycleCounterComponent,
    ActionButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
