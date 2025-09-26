const express = require("express");
const { registerUser, registerManager, registerAdmin, login } = require("../controllers/authController");
const { emailValidator, passwordValidator } = require("../middleware/validationMiddleware");
const { protect } = require("../middleware/authMiddleware");
const { requireRole } = require("../middleware/roleMiddleware");
const { registerLimiter, loginLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/register-user", registerLimiter, [emailValidator, passwordValidator], registerUser);
router.post("/register-manager", protect, requireRole("admin"), registerLimiter, [emailValidator, passwordValidator], registerManager);
router.post("/register-admin", registerLimiter, [emailValidator, passwordValidator], registerAdmin);

router.post("/login", loginLimiter, [emailValidator, passwordValidator], login);

module.exports = router;
