const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

// router.route("/").get(getGoals).post(setGoals);
// router.route("/:d").put(updateGoals).delete(deleteGoals);

router.get("/", getGoals);

router.post("/", setGoals);

router.put("/:id", updateGoals);

router.delete("/:id", deleteGoals);

router.get("/test", (req, res) => {
  res.send("khassi  ");
});

module.exports = router;
