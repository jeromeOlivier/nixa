const {
  create_user_service,
  find_all_users_service,
  find_user_by_id_service,
  update_user_service,
  delete_user_service,
} = require("../services/user_services");

/**
 * Asynchronous function that handles the creation of a user.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {void}
 */
const create_user_controller = async(req, res) => {
  await create_user_service(req, res);
  const users = await find_all_users_service(req, res);
  res.render("layout", { users: users });
};

/**
 * Controller function to find all users and render them in a layout.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A promise that resolves when the rendering is complete.
 */
const find_all_users_controller = async(req, res) => {
  const users = await find_all_users_service(req, res);
  res.render("layout", { users: users });
};

/**
 * Function to handle the update form request.
 *
 * @function get_update_form
 * @async
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {void}
 */
const get_update_form = async(req, res) => {
  const [user] = await find_user_by_id_service(req, res);
  if (!user) {
    res.render("error", { message: "User not found" });
    return;
  }
  res.render("update_form", { user: user });
};

/**
 * Update user controller.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void} - A promise that resolves when the update is complete.
 */
const update_user_controller = async(req, res) => {
  await update_user_service(req, res);
  const users = await find_all_users_service(req, res);
  res.render("layout", { users: users });
};

/**
 * Delete user controller is responsible for handling the request to delete a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}.
 */
const delete_user_controller = async(req, res) => {
  await delete_user_service(req, res);
  const users = await find_all_users_service(req, res);
  res.render("users", { users: users });
};

module.exports = {
  create_user_controller,
  find_all_users_controller,
  get_update_form,
  update_user_controller,
  delete_user_controller,
};