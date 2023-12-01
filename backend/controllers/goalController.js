const  asyncHandler = require('express-async-handler');

const getGoals = asyncHandler( async (req, res) => {
  res.status(200).json({ message: "get goals " });
});

//api/goals

const setGoals =asyncHandler( async(req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new error("Enter Text");
  }

  res.status(200).json({ message: "post goals " });
});

const updateGoals = asyncHandler( async(req, res) => {
  res.status(200).json({ message: ` put goals ${req.params.id} ` });
});

const deleteGoals = asyncHandler ( async(req, res) => {
  res.status(200).json({ message: ` delete goals ${req.params.id} ` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
