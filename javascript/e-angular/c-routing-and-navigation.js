// Angular Routing and Navigation Section
// --------------
// This Section contains information about how to implement many of the common tasks 
// associated with adding the Angular router in the application.

// add to @NgModule:

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
    ],
    providers: [],
    bootstrap: [AppComponent]
})

// example  Basic routes
const routes: Routes = [
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
];

// example anchored element
<a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a>

// routerLink="/first-component": The routerLink attribute is specific to web frameworks like Angular or React. It is used for client-side routing within a single-page application (SPA).
//  In this case, when the link is clicked, it will navigate to the "first-component" route or page.
// 
// routerLinkActive="active": The routerLinkActive attribute is also specific to web frameworks with client-side routing. It is used to apply a CSS class 
// or style when the link's corresponding route is active. In this case, when the "first-component" route is active, the "active" CSS class will be applied to the link.
// 
// ariaCurrentWhenActive="page": The ariaCurrentWhenActive attribute is an ARIA (Accessible Rich Internet Applications) attribute that is used to provide accessibility 
// information to assistive technologies. It specifies the value of "page" to indicate the link's current state when the corresponding route is active.