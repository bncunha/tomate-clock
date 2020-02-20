import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
