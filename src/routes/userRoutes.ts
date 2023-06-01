import express, { Request, Response } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllors/userController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the CRUD API using TypeScript, Node.js, and MongoDB!");
});

router.post("/", createUser);
router.get("/getusers", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
