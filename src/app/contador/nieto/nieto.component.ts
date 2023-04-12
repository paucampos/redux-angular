import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent {
  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store
    .select('contador')
    .subscribe((contador) => (this.contador = contador));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
