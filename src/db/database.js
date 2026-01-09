const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "files.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("DB connection error", err);
    } else {
        console.log("SQLite database connected");
    }
});

// Create table with correct types
db.run(`
    CREATE TABLE IF NOT EXISTS files (
        id TEXT PRIMARY KEY,
        original_name TEXT NOT NULL,
        stored_name TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

module.exports = db;