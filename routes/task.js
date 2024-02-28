import express from "express";
import {
  newTask,
  getMyTasks,
  updateTask,
  deleteTask,
} from "../controller/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/my", isAuthenticated, getMyTasks);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);
export default router;
