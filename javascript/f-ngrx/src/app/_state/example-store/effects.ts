import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { YourService } from './your-service'; // Replace with your service
import * as YourActions from './your-actions'; // Import your CRUD actions

@Injectable()
export class YourEffects {
  constructor(
    private actions$: Actions,
    private yourService: YourService // Replace with your service
  ) {}

  // Create Effect ---------------------------------------------------------------------------
  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YourActions.ADD_ITEM),
      mergeMap((action) =>
        this.yourService.addItem(action.payload).pipe(
          map((data) => YourActions.ADD_ITEM_SUCCESS({ payload: data })),
          catchError((error) => of(YourActions.ADD_ITEM_ERROR({ payload: error })))
        )
      )
    )
  );

  // Read Effect ---------------------------------------------------------------------------
  fetchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YourActions.FETCH_ITEMS),
      mergeMap(() =>
        this.yourService.fetchItems().pipe(
          map((data) => YourActions.FETCH_ITEMS_SUCCESS({ payload: data })),
          catchError((error) => of(YourActions.FETCH_ITEMS_ERROR({ payload: error })))
        )
      )
    )
  );

  // Update Effect ---------------------------------------------------------------------------
  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YourActions.UPDATE_ITEM),
      mergeMap((action) =>
        this.yourService.updateItem(action.payload).pipe(
          map((data) => YourActions.UPDATE_ITEM_SUCCESS({ payload: data })),
          catchError((error) => of(YourActions.UPDATE_ITEM_ERROR({ payload: error })))
        )
      )
    )
  );

  // Delete Effect ---------------------------------------------------------------------------
  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YourActions.DELETE_ITEM),
      mergeMap((action) =>
        this.yourService.deleteItem(action.payload).pipe(
          map(() => YourActions.DELETE_ITEM_SUCCESS({ payload: action.payload })),
          catchError((error) => of(YourActions.DELETE_ITEM_ERROR({ payload: error })))
        )
      )
    )
  );
}
