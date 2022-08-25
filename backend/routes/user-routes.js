import express from 'express';
import {
	deleteUsers,
	getAllUsers,
	getUniqueUser,
	updateUser,
} from '../controllers/user-controller.js';

const userRouter = express.Router();

// since we already have register and login inside of the auth we dont declare them here

// update request to a existing hotel
userRouter.put('/:id', updateUser);

// delete request to a existing hotel
userRouter.delete('/:id', deleteUsers);

// get a specific hotel request to existing hotels
userRouter.get('/:id', getUniqueUser);

// getting all hotel from the existing hotels
userRouter.get('/', getAllUsers);

export default userRouter;
