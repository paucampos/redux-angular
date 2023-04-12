import { createReducer, on } from '@ngrx/store';
import * as actions from './contador.actions';

export const initialState = 20;

export const contadorReducer = createReducer(
  initialState,
  on(actions.incrementar, (state) => state + 1),
  on(actions.decrementar, (state) => state - 1),
  on(actions.reset, (state) => 0)
);