class Logger {
    private static instance: Logger;
    private count: number = 0;
    constructor() {}
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public incrementCount() {
        this.count++;
    }

    public displayCount() {
        console.log(this.count);
    }
}

const logger1 = Logger.getInstance();
logger1.incrementCount(); // count = 1
logger1.displayCount(); // 1

const logger2 = Logger.getInstance();
logger2.displayCount(); // 1
logger2.incrementCount(); // count = 2
logger2.displayCount(); // 2

logger1.displayCount(); // 2
