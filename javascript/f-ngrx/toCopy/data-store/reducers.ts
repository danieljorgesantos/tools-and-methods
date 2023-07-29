import { createReducer, on } from '@ngrx/store';

// const initialState: AuthState = {
//   navigationMode: 'off',
//   footerMode: 'off',
//   profile: {},
//   user: {},
// };

const initialState: any = {
  favorites: {},
};

export const DataReducer = createReducer(
  initialState,

  on(get_favorites_success, (state, action) => ({
    ...state,
    favorites: action.payload,
  })),

);
