import Database from './singleton-pattern/db';
import 'dotenv/config';
import './singleton-pattern/logger';
async function executeQuery() {
    try {
        const pool = await Database.getInstance();
        const poolTwo = await Database.getInstance();
        console.log(pool === poolTwo); //! true
        const result = await pool.request().query('SELECT * FROM [GINMSSQL].[dbo].[Persons]');
        console.log(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
    }
}

executeQuery();

// Decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
        console.log(descriptor);
    };
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(true)
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
const greeting = new Greeter('Tran Van Dung');

console.log(greeting.greet());
