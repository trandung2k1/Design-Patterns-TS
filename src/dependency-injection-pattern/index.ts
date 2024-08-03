type User = {
    id: number;
    name: string;
};

class Logging {
    log(messae: string) {
        console.log(messae);
    }
}

class Database {
    private users: User[] = [
        {
            id: 1,
            name: 'John',
        },
        {
            id: 2,
            name: 'Dung',
        },
    ];
    constructor() {}
    async findUserById(userId: number) {
        return this.users.find((u) => u.id === userId);
    }
}

class Service {
    public logging: Logging;
    public db: Database;
    constructor(db: Database, logging: Logging) {
        this.db = db;
        this.logging = logging;
    }

    async getUser(userId: number) {
        const user = await this.db.findUserById(userId);
        this.logging.log(`Fetched user ${user!.name}`);
        return user;
    }
}

const db = new Database();
const logging = new Logging();
const service = new Service(db, logging);
service.getUser(1).then((user) => console.log(user));
