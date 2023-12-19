const User = require("../models/User");
const { open } = require("sqlite");
const { dbObject } = require("../utilities/db_migrations");
let db;
(async() => {
  db = await open(dbObject);
})();

/**
 * Creates a new user in the database.
 * @param {object} req - The request object containing the user information in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves once the user is created.
 */
const create_user_service = async(req, res) => {
  const { first_name, last_name, telephone } = req.body;
  const date = new Date().toISOString();
  await db.run("INSERT INTO users (first_name, last_name, telephone, date) VALUES (?, ?, ?, ?)", [
    first_name, last_name, telephone, date,
  ]);
};

/**
 * Retrieves all users from the database.
 *
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - An array containing all user objects retrieved from the database.
 */
const find_all_users_service = async(req, res) => {
  return await db.all("SELECT * FROM users ORDER BY id DESC");
};

/**
 * Finds a user by their ID.
 *
 * @async
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<Array<User>>} - A promise that resolves to an array of user objects.
 */
const find_user_by_id_service = async(req, res) => {
  const id = req.params.id;
  return await db.all("SELECT * FROM users WHERE id = ?", [id]);
};

/**
 * Update user service
 * Updates the user's details in the database.
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to send back to the client.
 * @returns {Promise} - A promise that resolves when the user details are updated.
 */
const update_user_service = async(req, res) => {
  const id = req.params.id;
  const { first_name, last_name, telephone } = req.body;
  await db.run("UPDATE users SET first_name = ?, last_name = ?, telephone = ? WHERE id = ?", [
    first_name, last_name, telephone, id,
  ]);
};

/**
 * Deletes a user from the database using the provided ID.
 *
 * @param {object} req - The request object received from the client.
 * @param {object} res - The response object used to send the response to the client.
 * @returns {Promise<void>} - A promise that resolves when the user is deleted.
 *
 * @throws {Error} - If there is an error executing the database query.
 */
const delete_user_service = async(req, res) => {
  const id = req.params.id;
  try {
    await db.run("DELETE FROM users WHERE id = ?", [id]);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  create_user_service,
  find_all_users_service,
  find_user_by_id_service,
  update_user_service,
  delete_user_service,
};