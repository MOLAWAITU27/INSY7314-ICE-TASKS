const { body } = require("express-validator");

const emailValidator = body("email").isEmail().normalizeEmail();
const passwordValidator = body("password").isLength({ min: 6 }).trim().escape();

module.exports = { emailValidator, passwordValidator };
 
