// NGRX
// --------------
// NgRx is a state management library for Angular applications that implements the Redux pattern.

// Angular Instalation

npm i @ngrx/store @ngrx/effects @ngrx/router-store @ngrx/entity @ngrx/component-store @ngrx/data @ngrx/store-devtools

// add imports on @NgModule

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AppComponent, MyCounterComponent],
    imports:
        [BrowserModule,
        StoreModule.forRoot()], // this line here
        EffectsModule.forRoot(), // this line here
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }