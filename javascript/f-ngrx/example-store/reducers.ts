import { createReducer, on } from '@ngrx/store';
import * as YourActions from './your-actions'; // Replace with your action imports

// Define your state interface
export interface YourState {
  items: any[]; // Adjust the data structure as needed
  loading: boolean;
  error: any;
}

// Define the initial state
const initialState: YourState = {
  items: [],
  loading: false,
  error: null,
};

// Create the reducer
export const yourReducer = createReducer(
  initialState,
  on(YourActions.ADD_ITEM, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(YourActions.ADD_ITEM_SUCCESS, (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
    loading: false,
  })),
  on(YourActions.ADD_ITEM_ERROR, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  })),
  on(YourActions.FETCH_ITEMS, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(YourActions.FETCH_ITEMS_SUCCESS, (state, { payload }) => ({
    ...state,
    items: payload,
    loading: false,
  })),
  on(YourActions.FETCH_ITEMS_ERROR, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  })),
  on(YourActions.UPDATE_ITEM, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(YourActions.UPDATE_ITEM_SUCCESS, (state, { payload }) => {
    const updatedItems = state.items.map((item) =>
      item.id === payload.id ? payload : item
    );
    return {
      ...state,
      items: updatedItems,
      loading: false,
    };
  }),
  on(YourActions.UPDATE_ITEM_ERROR, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  })),
  on(YourActions.DELETE_ITEM, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(YourActions.DELETE_ITEM_SUCCESS, (state, { payload }) => {
    const updatedItems = state.items.filter((item) => item.id !== payload.id);
    return {
      ...state,
      items: updatedItems,
      loading: false,
    };
  }),
  on(YourActions.DELETE_ITEM_ERROR, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }))
);

export function reducer(state: YourState | undefined, action: Action) {
  return yourReducer(state, action);
}