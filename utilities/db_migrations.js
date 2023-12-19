// create db and populate with dummy data
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
/**
 * Represents a database object.
 * @typedef {Object} dbObject
 * @property {string} filename - The filename or path to the database file.
 * @property {Object} driver - The database driver object used for connecting and accessing the database.
 */
const dbObject = {
  filename: "../nixa.db",
  driver: sqlite3.Database,
};

sqlite3.verbose();

/*
(async() => {
  const db = await open(dbObject);

  await db.exec(`DROP TABLE IF EXISTS users`);

  await db.exec(`
      CREATE TABLE users
      (
          id         INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name TEXT,
          last_name  TEXT,
          telephone  TEXT,
          date       DATE
      )`);

  for (let i = 1; i <= 10; i++) {
    const r = Math.floor(Math.random()*10);
    let date = new Date();
    date.setFullYear(date.getFullYear() - i);
    let dateString = date.toISOString();
    let firstName = "user" + i;
    let lastName = "last" + i;
    let telephone = `${r}${r}${r}${r}${r}${r}${r}${r}${r}${r}`;
    let sql = `
        INSERT INTO users (first_name, last_name, telephone, date)
        VALUES ('${ firstName }',
                '${ lastName }',
                '${ telephone }',
                '${ dateString }')
    `;
    await db.exec(sql);
  }
})();
*/

module.exports = { dbObject };