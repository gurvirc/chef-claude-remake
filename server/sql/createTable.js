import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function createTable(){
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS user(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE NOT NULL,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        
        CREATE TABLE IF NOT EXISTS saved_recipes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER NOT NULL,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            servings INTEGER NOT NULL,
            time INTEGER NOT NULL,
            recipe TEXT NOT NULL,
            difficulty TEXT,
            imgPath TEXT, 
            saved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (userId) REFERENCES user(id)
        );

        `)

        await db.close()
        console.log("table created")
}

createTable()