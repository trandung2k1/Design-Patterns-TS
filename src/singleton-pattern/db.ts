import { ConnectionPool, config as SQLConfig } from 'mssql';

class Database {
    private static instance: ConnectionPool;
    private constructor() {}
    public static async getInstance(): Promise<ConnectionPool> {
        if (!Database.instance) {
            const config: SQLConfig = {
                user: process.env.DB_USER!,
                password: process.env.DB_PASSWORD!,
                server: process.env.DB_SERVER!,
                database: process.env.DB_NAME!,
                options: {
                    encrypt: true,
                    trustServerCertificate: true,
                },
            };
            Database.instance = new ConnectionPool(config);
            await Database.instance.connect();
        }
        return Database.instance;
    }
}

export default Database;
