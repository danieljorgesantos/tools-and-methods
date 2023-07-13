// TypeScript: A Static Type Checker

//  TypeScript is a strongly typed superset of JavaScript that adds optional static typing to the language. It was
//  developed by Microsoft and provides developers with additional features and tools to enhance the development
//  experience. With TypeScript, you can catch errors and bugs at compile-time rather than runtime,
//  making it easier to write and maintain large-scale applications.

// The Basics


// decorators in typescript

class Example {
    @log
    sum(a: number, b: number): number {
      return a + b;
    }
  }
