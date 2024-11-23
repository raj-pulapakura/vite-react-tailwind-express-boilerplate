import express, { Request, Response } from "express";

export const authRouter = express.Router();

authRouter.post("/refresh-token", async (req, res) => {
});