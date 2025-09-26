import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";
import {
  createPoll,
  votePoll,
  getPollResults,
  getOrgPolls,
  closePoll,
  openPoll
} from "../controllers/pollController.js";

const router = express.Router();

router.post("/create-poll", protect, requireRole("manager"), createPoll);
router.post("/vote/:pollId", protect, requireRole("user"), votePoll);
router.get("/get-poll-results/:pollId", protect, getPollResults);
router.get("/get-polls/:organisationId", protect, getOrgPolls);
router.post("/close/:pollId", protect, requireRole("manager"), closePoll);
router.post("/open/:pollId", protect, requireRole("manager"), openPoll);

export default router;
