import express from 'express';

const authRouter = express.Router();

// http://localhost:5000/api/auth
authRouter.get('/', (req, res, next) => {
	res.send('Hello this is the auth end point');
});

// http://localhost:5000/api/auth/register
authRouter.get('/register', (req, res, next) => {
	res.send('Hello this is the reg end point');
});

export default authRouter;
