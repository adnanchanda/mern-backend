const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new error("Enter Text");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
const deleteGoals = asyncHandler(async (req, res) => {
   const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  await goal.deleteOne({_id: req.params.id});

  res.status(200).json({id: req.params.id});
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
