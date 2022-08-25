import express from 'express';
import {
	deleteUsers,
	getAllUsers,
	getUniqueUser,
	updateUser,
} from '../controllers/user-controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const userRouter = express.Router();

// since we already have register and login inside of the auth we dont declare them here

// authentication route using JWT Cookies and this will execute once the next in the verify token is executed only
userRouter.get('/checkAuthentication', verifyToken, (req, res, next) => {
	res.send('Hello user you are athenticated and Logged in!');
});

// update request to a existing hotel
userRouter.put('/:id', updateUser);

// delete request to a existing hotel
userRouter.delete('/:id', deleteUsers);

// get a specific hotel request to existing hotels
userRouter.get('/:id', getUniqueUser);

// getting all hotel from the existing hotels
userRouter.get('/', getAllUsers);

export default userRouter;
