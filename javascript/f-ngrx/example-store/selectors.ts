import { createSelector, createFeatureSelector } from '@ngrx/store';
import { YourState } from './your-reducer'; // Replace with your actual reducer import

// Create a feature selector for your module's state
export const selectYourState = createFeatureSelector<YourState>('yourModule');

// Create selectors to access specific pieces of state
export const selectItems = createSelector(
  selectYourState,
  (state) => state.items
);

export const selectLoading = createSelector(
  selectYourState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectYourState,
  (state) => state.error
);
