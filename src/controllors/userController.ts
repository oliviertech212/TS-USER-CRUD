import { Request, Response } from "express";
import User from "../models/ user";
// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Failed to retrieve users:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

// Get a specific user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Failed to retrieve user:", error);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, password },
      { new: true }
    );

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Failed to update user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
