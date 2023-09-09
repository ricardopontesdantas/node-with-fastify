import { sql } from "./db.js";

// sql `DROP TABLE IF EXISTS nodedozero.videos`.then(() => console.log("table dropped"));

sql `
    CREATE TABLE nodedozero.videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log("table created");
}).catch((e) => {
    console.error(e.message)
}).finally(() => {
    console.log("finished")
});