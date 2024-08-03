function readonly<TFunction extends { new (...args: any[]): {} }>(Target: TFunction): TFunction {
    return class extends Target {
        constructor(...args: any[]) {
            super(...args);
            Object.freeze(this);
        }
    };
}

@readonly
class Person {
    readonly name: string;
    readonly isAdmin: boolean;

    constructor(name: string, isAdmin: boolean) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

const admin = new Person('DungTV', true);
console.log(admin);

// admin.name = 'dungtv'; // error
console.log(admin);
