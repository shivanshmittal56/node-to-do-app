import express from "express";
import {
  register,
  getAllUser,
  login,
  getMyProfile,
  logout,
} from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUser);
router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);
export default router;

//dynamic url
// router.get("/userid/:id/:name", getByName);
