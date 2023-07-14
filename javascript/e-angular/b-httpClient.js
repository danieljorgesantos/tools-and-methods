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

// under the app folder in angular, create a _services folder, cd that folder

// creating a service in angular:
ng generate service service - name

// create a general handle error file in the services folder.
private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
}

// general service file for handling http requests.

// Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs Imports
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ExampleService {
    constructor(private http: HttpClient) { }

    apiUrl = 'assets/config.json';

    get() {
        return this.http.get < Config > (this.configUrl);
    }

    /** POST: add a new hero to the database */
    post(hero: Hero): Observable<Hero> {
        return this.http.post < Hero > (this.apiUrl, hero, httpOptions)
            .pipe(
                catchError(this.handleError('addHero', hero))
            );
    }

    /** DELETE: delete the hero from the server */
    delete(id: number): Observable<unknown> {
        const url = `${this.apiUrl}/${id}`; // DELETE api/heroes/42
        return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('deleteHero'))
            );
    }

    /** PUT: update the hero on the server. Returns the updated hero upon success. */
    update(hero: Hero): Observable<Hero> {
        return this.http.put < Hero > (this.apiUrl, hero, httpOptions)
            .pipe(
                catchError(this.handleError('updateHero', hero))
            );
    }

}

