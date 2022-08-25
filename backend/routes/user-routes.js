import express from 'express';

const userRouter = express.Router();

// http://localhost:5000/api/auth
userRouter.get('/', (req, res, next) => {
	res.send('Hello this is the user end point');
});

// http://localhost:5000/api/auth/register
userRouter.get('/register', (req, res, next) => {
	res.send('Hello this is the reg end point');
});

export default userRouter;
