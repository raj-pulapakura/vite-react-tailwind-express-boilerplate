import express, { Request, Response } from "express";
import authMiddleware from '../middleware/authMiddleware';

export const apiRouter = express.Router();

apiRouter.use(authMiddleware)

apiRouter.get("/", async (req: Request, res: Response) => {
    res.send("Hello World");
});