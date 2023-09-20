import { createSelector, createFeatureSelector } from '@ngrx/store';
import { YourState } from './your-reducer'; // Replace with your actual reducer import

// Create a feature selector for your module's state
export const selectYourState = createFeatureSelector<YourState>('yourModule');

// Create selectors to access specific pieces of state
export const selectItems = createSelector(
  selectYourState,
  (state) => state.items
);

// // Create a selector to select an item by ID
// export const selectItemById = (itemId: number) =>
//   createSelector(
//     cartTransferState,
//     (state: any) =>
//       state.productsInCartTransfer.find((item: any) => item.id === itemId)
//   );


//   ngOnInit(): void {
//     this.selectedItem$ = this.store.select(selectItemById(this.inputData.id)); // Replace 1 with the desired item ID

//     this.store.select(selectItemById(this.inputData.id)).subscribe((item) => {
//       this.selectedItem = item;
//     });
//   }