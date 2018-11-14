import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as contadorActions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  reset() {
    // this.contador = 0;
    // this.cambioContador.emit(this.contador);
    const accion = new contadorActions.ResetearAction(10);

    this.store.dispatch(accion);
  }

}
