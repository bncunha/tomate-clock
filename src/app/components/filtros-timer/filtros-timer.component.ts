import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtros-timer',
  templateUrl: './filtros-timer.component.html',
  styleUrls: ['./filtros-timer.component.scss']
})
export class FiltrosTimerComponent implements OnInit {
  @Output() filtroChange = new EventEmitter();

  private _filtro: string;
  constructor() { }

  ngOnInit() {
  }

  @Input()
  get filtro() {
    return this._filtro;
  }

  set filtro(value: string) {
    this._filtro = value;
    this.filtroChange.emit(this._filtro);
  }

}
