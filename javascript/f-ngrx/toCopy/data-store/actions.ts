// Ngrx imports
import { createAction, props } from '@ngrx/store';

// Actions

// User get_favorites
export const get_favorites = createAction('[state_favorites] get_favorites');
export const get_favorites_success = createAction(
  '[state_favorites] get_favorites Success',
  props<{ payload: any }>()
);
export const get_favorites_error = createAction(
  '[state_favorites] get_favorites Error'
);
