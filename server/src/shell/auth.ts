import express from "express";
import type { Request, Response } from "express";
import { getUser, addUser } from "../core/index.ts";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await getUser(username);
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (e) {
    console.error("get user error:", e.message);
    res.status(500).json({ error: "Error logging in" });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    await addUser(username, password);
    res.status(201).json({ message: "User created successfully " });
  } catch (e) {
    res.status(500).json({ error: "Error creating user" });
  }
});

export default router;
