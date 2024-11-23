import { NextFunction, Request, Response } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void | Promise<void> => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Authorization token required' });
        return;
    }

    const token = authHeader.split(' ')[1];

    // Attach the token to the request object
    req.token = token;
    next();
};

export default authMiddleware;