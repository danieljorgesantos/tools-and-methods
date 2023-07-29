import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable, Subject, of } from 'rxjs';
import {
  map,
  exhaustMap,
  catchError,
  switchMap,
  mergeMap,
  takeUntil,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';


@Injectable()
export class DataEffects {
  get_favorites$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[state_favorites] get_favorites'),
        mergeMap(() =>
          this.dataService.getFavorites().pipe(
            map((res) => {
              this.store.dispatch(get_favorites_success({ payload: res }));
              res.forEach((el: any) => {
                this.store.dispatch(get_recipe({ payload: el }));
              });
            })
          )
        )
      ),
    { dispatch: false }
  );

  private destroy$ = new Subject<void>();
  private serviceCalled = false;

  get_cart$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[state_recipe] get_cart'),
      exhaustMap((payload: any) => {
        if (!this.serviceCalled) {
          this.serviceCalled = true;
          return this.dataService.getCart(payload).pipe(
            map((res) => get_cart_success({ payload: { ...res.data } })),
            catchError((error) => {
              console.error('Error getting cart:', error);
              return of({ type: 'NO_ACTION' });
            }),
            takeUntil(this.destroy$)
          );
        } else {
          return of({ type: 'NO_ACTION' });
        }
      })
    )
  );

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store,
  ) {}
}
