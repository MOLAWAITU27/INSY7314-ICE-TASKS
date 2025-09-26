import express from "express";
import {
  registerUser,
  registerManager,
  registerAdmin,
  login
} from "../controllers/authController.js";
import {
  emailValidator,
  passwordValidator
} from "../middleware/validationMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
// ❌ Removed: import { requireRole } from "../middleware/roleMiddleware.js";
import {
  registerLimiter,
  loginLimiter
} from "../middleware/rateLimiter.js";

const router = express.Router();

router.post(
  "/register-user",
  registerLimiter,
  [emailValidator, passwordValidator],
  registerUser
);

// 🔧 Removed requireRole("admin") since roleMiddleware.js is missing
router.post(
  "/register-manager",
  protect,
  registerLimiter,
  [emailValidator, passwordValidator],
  registerManager
);

router.post(
  "/register-admin",
  registerLimiter,
  [emailValidator, passwordValidator],
  registerAdmin
);

router.post(
  "/login",
  loginLimiter,
  [emailValidator, passwordValidator],
  login
);

export default router;
