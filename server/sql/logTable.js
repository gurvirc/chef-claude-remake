import { getDBConnection } from "../db/db.js";

async function logTable(){

    const db = await getDBConnection()

    const tableName = 'saved_recipes'

    try {
        const table = await db.all(`SELECT * FROM ${tableName}`)
        console.table(table)
    } catch(err) { 
        console.error('Error fetching table from database')
    } 
}

logTable()