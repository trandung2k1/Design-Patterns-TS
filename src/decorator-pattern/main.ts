function First() {
    console.log('first(): factory evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('first(): called');
    };
}

function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

class ExampleClass {
    @First()
    displayMsg() {
        console.log('Hello!');
    }
}

function ReportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = 'http://www...';
    };
}

@ReportableClassDecorator
class BugReport {
    type = 'report';
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const bug = new BugReport('Needs dark mode');
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
console.log(bug); // Print
