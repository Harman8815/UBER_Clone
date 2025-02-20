import express from 'express';
import cors from 'cors';
import connectToDb from './db/db.js';
import userRoutes from './routes/user.routes.js';

import cookieParser from 'cookie-parser';
const app = express();

// Database connection
connectToDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); app.use(cookieParser());

// Routes
app.use('/user', userRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
