import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cycle-counter',
  templateUrl: './cycle-counter.component.html',
  styleUrls: ['./cycle-counter.component.scss']
})
export class CycleCounterComponent implements OnInit {
  @Input() totalCycles = 4;
  @Input() cycle = 1;
  @Input() text = 'Count';

  cyclesArray: number[];
  constructor() { }

  ngOnInit() {
    this.cyclesArray = new Array(this.totalCycles);
  }

}
