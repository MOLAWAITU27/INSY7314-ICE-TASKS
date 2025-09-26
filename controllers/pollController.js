import Poll from "../models/Poll.js";
import Organisation from "../models/Organisation.js";

export const createPoll = async (req, res) => {
  const { organisationId, question, options } = req.body;
  if (!options || options.length < 2) {
    return res.status(400).json({ message: "A poll must have at least two options" });
  }

  const org = await Organisation.findById(organisationId);
  if (!org) return res.status(404).json({ message: "Organisation not found" });

  const poll = await Poll.create({
    organisationId,
    question,
    options,
    createdBy: req.user.id
  });

  res.status(201).json({ message: "Poll created", poll });
};

export const votePoll = async (req, res) => {
  const { pollId } = req.params;
  const { optionIndex } = req.body;

  const poll = await Poll.findById(pollId);
  if (!poll) return res.status(404).json({ message: "Poll not found" });
  if (poll.status !== "open") return res.status(400).json({ message: "Poll is closed" });

  const alreadyVoted = poll.votes.some(v => v.userId.toString() === req.user.id);
  if (alreadyVoted) {
    return res.status(409).json({ message: "You have already voted" });
  }

  poll.votes.push({ userId: req.user.id, optionIndex });
  await poll.save();

  res.json({ message: "Vote recorded", poll });
};

export const closePoll = async (req, res) => {
  const { pollId } = req.params;
  const poll = await Poll.findById(pollId);
  if (!poll) return res.status(404).json({ message: "Poll not found" });

  poll.status = "closed";
  await poll.save();

  res.json({ message: "Poll closed", poll });
};

export const openPoll = async (req, res) => {
  const { pollId } = req.params;
  const poll = await Poll.findById(pollId);
  if (!poll) return res.status(404).json({ message: "Poll not found" });

  poll.status = "open";
  await poll.save();

  res.json({ message: "Poll opened", poll });
};
