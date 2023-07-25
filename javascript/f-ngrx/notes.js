// NGRX
// --------------
// NgRx is a state management library for Angular applications that implements the Redux pattern.

// Angular Instalation

npm i @ngrx/core @ngrx/store @ngrx/effects @ngrx/router - store @ngrx/entity @ngrx/component - store @ngrx/data @ngrx/store - devtools

// add imports on @NgModule

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

@NgModule({
    declarations: [AppComponent, MyCounterComponent],
    imports:
        [BrowserModule,
            StoreModule.forRoot()], // this line here
    EffectsModule.forRoot(), // this line here
    StoreDevtoolsModule.instrument({ // Instrumentation must be imported after importing StoreModule (config is optional)
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
    }),
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

// NgRx can be divided into the following five concepts:

// – **Store** – where everything is stored
// 
// – **Selectors** – retrieve the state or state slice, Create perfect view selectors for container components
// 
// – **Actions** – notify NgRx an event has happened
// 
// – **Reducers** – perform updates on the state in the store
// 
// – **Effects** – perform any side effects






// we want to create  a single object for the state, and then slice it

// Defining the shape of the Application State

// After installing the store, its a good idea to define a custom type called ApplicationState:

export interface ApplicationState {
    uiState: UiState,
    storeData: StoreData
}


// actions

import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Login Page] Login',
    props < { username: string; password: string } > ()
);


// component.ts

onSubmit(username: string, password: string) {
    store.dispatch(login({ username: username, password: password }));
}

// reducer

import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

// state interface
export interface State {
  home: number;
  away: number;
}

// Setting the initial state
export const initialState: State = {
  home: 0,
  away: 0,
};

// Creating the reducer function
export const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

// --------------------------------------------------------------------------
// import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from './reducers/scoreboard.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ game: scoreboardReducer })
  ],
})
export class AppModule {}

// chatGpt autocreate


using the following examples between <> 

<
// User get_cart
export const get_cart = createAction('[state_cart] get_cart');
export const get_cart_success = createAction(
  '[state_cart] get_cart Success',
  props<{ payload: any }>()
);
export const get_cart_error = createAction('[state_cart] get_cart Error');

private destroy$ = new Subject<void>();
private serviceCalled = false;

get_cart$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[state_cart] get_cart'),
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

on(get_cart_success, (state, action) => ({
  ...state,
  cart: {
    ...state.cart,
    ...action.payload[0]
  }
})),

getCart(payload: any) {
  return this.http.get<any>(this.endpoint + '/cart?user_id=1&share_token=null')
}

>

do the same changing the names of the actions, effects, but for this:

getList(payload: any) {
  return this.http.get<any>(this.endpoint + '/cart/list?user_id=1')
}
