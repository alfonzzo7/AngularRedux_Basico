import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as contadorActions from './contador/contador.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  incrementar() {
    // this.contador += 1;
    const accion = new contadorActions.IncrementarAction();

    this.store.dispatch(accion);
  }

  decrementar() {
    // this.contador -= 1;
    const accion = new contadorActions.DecrementarAction();

    this.store.dispatch(accion);
  }
}
