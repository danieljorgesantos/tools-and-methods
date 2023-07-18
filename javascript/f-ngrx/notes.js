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



