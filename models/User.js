/**
 * User model
 * @typedef {Object} User
 * @property {string} first_name - First name
 * @property {string} last_name - Last name
 * @property {string} telephone - Telephone number
 * @property {Date} date - Date
 */

/**
 * @class
 */
class User {
  /**
   * @param {string} first_name
   * @param {string} last_name
   * @param {string} telephone
   * @param {Date} date
   */
  constructor(first_name, last_name, telephone, date) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.telephone = telephone;
    this.date = date;
  }
}

module.exports = User;