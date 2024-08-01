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
