const router = require("express").Router();
const auth = require("../middleware/user.middleware");
const { createTask, getTasks, deleteTask, completeTask } = require("../controller/todo.controller");

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.delete("/:id", auth, deleteTask);
router.get("/complete/:id", auth, completeTask);

module.exports = router;