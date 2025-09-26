import { body } from "express-validator";

export const emailValidator = [
  body("email")
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail()
];

export const passwordValidator = [
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .trim()
    .escape()
];
