import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors"

import { Server } from "socket.io"
import { createServer } from 'http';

import { authRouter } from './routes/auth';
import { apiRouter } from './routes/api';
import { productsRouter } from './routes/products';

import connectDB from './config/db';

// Configure environment variables
dotenv.config();

// Configure database
connectDB();

// Create Express app
const app: Express = express();
const port = process.env.PORT || 3000;

// Setup socket.io
const server = createServer(app);
export const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', async (socket) => {
    const token = socket.handshake.auth?.token || '';
    socket.join(token);

    console.log(`[server] User socket connected: ${token}`);

    socket.on('disconnect', () => {
        socket.leave(token);
    });
});

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/auth', authRouter)
app.use('/api', apiRouter)
app.use('/products', productsRouter)

// Start server
server.listen(port, () => {
    console.log(`[server] Server is running at http://localhost:${port}`);
});