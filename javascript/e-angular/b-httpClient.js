// Angular HTTP client Section
// --------------
// This Section contains information about the Angular HTTP Client.
// The HTTP client in Angular is a built-in module that provides a high-level API for making HTTP requests from Angular applications.

// Setting up

// 1. Go to @NgModule of your current Module

// 2. Add the import
import { HttpClientModule } from '@angular/common/http';

// 3. Add the import inside the @NgModule
imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
]

// under the app folder in angular, create a _services folder

// creating a service in angular:
ng generate service service-name


