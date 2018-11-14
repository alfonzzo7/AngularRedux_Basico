import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as contadorActions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new contadorActions.MultiplicarAction(5);

    this.store.dispatch(accion);
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new contadorActions.DividirAction(5);

    this.store.dispatch(accion);
  }

  // resetNieto(nuevoContador) {
  //   this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  // }

}
