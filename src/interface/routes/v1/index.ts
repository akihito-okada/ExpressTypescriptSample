import express from "express";
import usersRouter from "./users";

const router = express.Router();

// v1以下のルーティング
router.use("/users", usersRouter);

export default router;
