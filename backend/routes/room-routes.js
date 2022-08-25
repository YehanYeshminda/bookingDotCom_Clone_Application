import express from 'express';

const roomRouter = express.Router();

// http://localhost:5000/api/auth
roomRouter.get('/', (req, res, next) => {
	res.send('Hello this is the room end point');
});

// http://localhost:5000/api/auth/register
roomRouter.get('/register', (req, res, next) => {
	res.send('Hello this is the reg end point');
});

export default roomRouter;
