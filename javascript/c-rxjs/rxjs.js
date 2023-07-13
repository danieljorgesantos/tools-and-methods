// Reactive Extensions for JavaScript (Rxjs)

// LearnRxJS - Simplified documentation.
// https://www.learnrxjs.io/

// RxMarbles - A Visual Guide to Rx
// https://rxmarbles.com/

import { Observable, lastValueFrom, from } from 'rxjs';

// Synchronous Operation:
// In a synchronous operation, tasks are executed sequentially and block the execution of the program until each task is completed.

// Asynchronous Operation:
// In an asynchronous operation, tasks are initiated and executed independently from the main program flow.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe", email: "john@example.com" };
            // Resolve the promise with the fetched data
            resolve(data);
        }, 2000);
    });
}

// Using the promise
fetchData()
    .then(data => {
        console.log("Data:", data);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Observables

// Observables represent a sequence of values over time, similar to a stream of events or asynchronous data. 
// observables can emit multiple values asynchronously, including regular values, errors, or completion signals.

const observable = new Observable((subscriber) => {
    setTimeout(() => {
        // pushing value 1, notifying the subscriber of that new value that was emitted.
        subscriber.next('1');
    }, 2000)
});

observable.subscribe({
    next(x) {
        console.log('x -->', x);
    },
    error(err) {
        console.log('err', err);
    },
    complete() {
        console.log('done');
    }
})


// ------------------------------------------------------------------------------------------------------------------------------------------------

// works like an observable, but you can decide when something happens

class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    next(data) {
        for (const observer of this.observers) {
            observer(data);
        }
    }
}

// Usage:
const subj = new Subject();

subj.subscribe((data) => {
    console.log('data', data);
});

subj.next('alex');

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Observables and promises are both used for handling asynchronous operations and managing the flow of data. However, 
// there are some key differences between them:

// Multiple Values: Promises resolve to a single value or reject with a single error. Once a promise is settled 
// (either resolved or rejected), it can't emit any additional values.
// In contrast, Observables can emit multiple values over time, including regular values, errors, and completion
// signals. Observables are designed for handling streams of data or events.

// Laziness: Promises are eager, meaning they start executing as soon as they are created. On the other hand, 
// Observables are lazy and don't start emitting values until someone
// subscribes to them. This allows you to control when and where you consume the values, providing more 
// flexibility in handling asynchronous operations.

// Cancellation: Promises don't support cancellation. Once a promise is initiated, it continues executing 
// until it's settled. In contrast, Observables can be easily canceled by unsubscribing
// from them. This feature is beneficial when dealing with long-running operations or when you need to 
// abort a request or unsubscribe from ongoing data streams.

// Operators: Observables offer a wide range of operators that allow you to transform, filter, combine,
// or manipulate the emitted values.Operators provide powerful capabilities for data
// manipulation and allow you to create complex data processing pipelines. Promises, on the other hand,
// don't have built-in operators and are generally used for simple asynchronous operations.

// Back-Pressure: Observables support back-pressure, which means the consumer can control the rate at
// which it receives data from the Observable.This allows the consumer to handle situations
// where it might be overwhelmed with data. Promises, being single-value entities, don't have back-pressure
// mechanisms.

// Error Handling: Both Observables and promises can handle errors. Promises use the .catch() or try...catch 
// constructs to handle errors.Observables have built -in error handling mechanisms
// and allow you to use operators like catchError() or retry() to handle and recover from errors in a
//  more flexible and expressive manner.

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Pull versus Push

// Pull and Push are two different protocols that describe how a data Producer can communicate with a data Consumer.

// Every JavaScript Function is a Pull system. The function is a Producer of data, and the code that calls the function is consuming
// it by "pulling" out a single return value from its call.

// RxJS introduces Observables, a new Push system for JavaScript. An Observable is a Producer of multiple values,
// "pushing" them to Observers (Consumers).

// What is the difference between an Observable and a function? Observables can "return" multiple values over time,
// something which functions cannot. You can't do this:

// function foo() {
//     console.log('Hello');
//     return 42;
//     return 100; // dead code. will never happen
//   }

// Functions can only return one value. Observables, however, can do this:

const foo = new Observable((subscriber) => {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100); // "return" another value
    subscriber.next(200); // "return" yet another
});

console.log('before');
foo.subscribe((x) => {
    console.log(x);
});
console.log('after');

// ------------------------------------------------------------------------------------------------------------------------------

// Subscribing to Observables

observable.subscribe((x) => console.log(x));

// ------------------------------------------------------------------------------------------------------------------------------

// converting a promise to an observable

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 2000);
});

const observable2 = from(promise);

observable2.subscribe({
    next: (value) => {
        console.log(value); // Outputs: 'Promise resolved!'
    },
    complete: () => {
        console.log('Observable completed!');
    },
    error: (error) => {
        console.error('Observable error:', error);
    },
});

// ------------------------------------------------------------------------------------------------------------------------------

// coverting an observable to a promise

const observable3 = new Observable((observer) => {
    setTimeout(() => {
        observer.next('Observable value!');
        observer.complete();
    }, 2000);
});

lastValueFrom(observable3)
    .then((value) => {
        console.log(value); // Outputs: 'Observable value!'
    })
    .catch((error) => {
        console.error('Promise error:', error);
    });


// ------------------------------------------------------------------------------------------------------------------------------

// observable unsubscribe


const observable4 = new Observable((observer) => {
    // Emit values
    observer.next('Value 1');
    observer.next('Value 2');
    observer.next('Value 3');

    // Complete the observable
    observer.complete();

    // This value will not be emitted since the observable is completed
    observer.next('Value 4');
});

const subscription2 = observable4.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('observable4 complete!');
    },
});

// Unsubscribe from the observable4 after 2 seconds
setTimeout(() => {
    subscription2.unsubscribe();
}, 2000);


 // ------------------------------------------------------------------------------------------------------------------------------

// rxjs operators
