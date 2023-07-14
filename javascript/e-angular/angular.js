// Angular

// Angular Cli Section
// --------------
// This section contains useful angular cli commands.

/**
 * npm install -g @angular/cli
 *
 * ng new my-app
 * 
 * ng serve --open
 *  
 * ng generate c <component-name>
 * 
 */

// Angular Decorators Section
// --------------
// This section contains decorators used to modify or enhance behavior.

// @Component
// This decorator is used to define a component in Angular.

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
// Component logic goes here
}

// @Directive:
// Directives allow you to modify the behavior or appearance of DOM elements.

@Directive({
  selector: '[appExampleDirective]'
})

// @NgModule
// This decorator is used to define an Angular module. It is applied to a class that represents the module and
// provides metadata about the module, such as the list of components, directives,
// and services it imports, exports, and declarations.

@NgModule({
  declarations: [ExampleComponent, ExampleDirective],
  imports: [CommonModule],
  exports: [ExampleComponent],
  providers: [ExampleService]
})
export class ExampleModule {
  // Module logic goes here
}


// @Injectable
// This decorator is used to define a service in Angular. It is applied to a class that
// represents the service and allows the class to be injected as a dependency in other classes.

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  // Service logic goes here
}

// @Input and @Output
// @Input is applied to a property and allows the property to be bound from the outside.
// @Output is used to define custom events that can be emitted by the component.

@Component({
  selector: 'app-example',
  template: `
    <p>Input value: {{ inputValue }}</p>
    <button (click)="emitEvent()">Click me</button>
  `
})
export class ExampleComponent {
  @Input() inputValue: string;
  @Output() customEvent = new EventEmitter<void>();

  emitEvent() {
    this.customEvent.emit();
  }
}

// Dependency injection Section
// --------------
// This section resumes Dependency injection that allows you to manage the dependencies between different parts of your application.



// Component Lifecycle Section
// --------------
// Angular executes hook methods in the following sequence.

// ngOnChanges()
// ngOnInit()
// ngDoCheck()
// ngAfterContentInit()
// ngAfterContentChecked()
// ngAfterViewInit()
// ngAfterViewChecked()
// ngOnDestroy()


// Angular Architecture Section
// --------------
// Angular Architecture for a scalable app.

src 
|-- app
| |-- _components
| | |-- component1
| | | |-- component1.component.ts
| | | |-- component1.component.html
| | | |-- component1.component.scss
| | | |-- component1.component.spec.ts
| | |
| |-- _services
| | |-- service1
| | | |-- service1.service.ts
| | | |-- service1.service.spec.ts
| | |
| |
| |-- _models
| | |-- model1.ts
| |
| |-- _modules
| | |-- module1
| | | |-- module1.component.ts
| | | |-- module1.component.html
| | | |-- module1.component.scss
| | | |-- module1.component.spec.ts
| | |
| |
| |-- app.component.ts
| |-- app.component.html
| |-- app.component.scss
| |-- app.component.spec.ts
| |-- app.module.ts
| |-- app-routing.module.ts
|
|-- assets
| |-- styles
| | |-- \_variables.scss
|
|-- environments
| |-- environment.ts
| |-- environment.prod.ts
|
|-- index.html
|-- main.ts
|-- styles.scss
|-- tsconfig.json
|-- angular.json
|-- package.json

