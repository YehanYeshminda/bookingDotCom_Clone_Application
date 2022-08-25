import express from 'express';
import { loginAuth, registerAuth } from '../controllers/auth-controller.js';

const authRouter = express.Router();

// http://localhost:5000/api/auth/register
authRouter.post('/register', registerAuth);

// login for users
authRouter.post('/login', loginAuth); // http://localhost:5000/api/auth/login

export default authRouter;
