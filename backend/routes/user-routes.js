import express from 'express';
import {
	deleteUsers,
	getAllUsers,
	getUniqueUser,
	updateUser,
} from '../controllers/user-controller.js';
import {
	verifyCheckAdmin,
	verifyCheckUser,
	verifyToken,
} from '../utils/verifyToken.js';

const userRouter = express.Router();

// since we already have register and login inside of the auth we dont declare them here

// authentication route using JWT Cookies and this will execute once the next in the verify token is executed only
// this is used to check if the user is logged in using the cookies
// userRouter.get('/checkAuthentication', verifyToken, (req, res, next) => {
// 	res.send('Hello user you are athenticated and Logged in!');
// });

// authentication route using JWT Cookies and this will execute once the next in the verify token is executed only
// this is used to check if the user is logged in or not
// userRouter.get('/checkuser/:id', verifyCheckUser, (req, res, next) => {
// 	res.send(
// 		'Hello user you are athenticated and Logged in and you can update, delete your account!'
// 	);
// });

// authentication route using JWT Cookies and this will execute once the next in the verify token is executed only
// this is used to check if the user is an admin or not has logged in
// do the unit testing where the isAdmin is set to true in the db
// userRouter.get('/checkadmin/:id', verifyCheckAdmin, (req, res, next) => {
// 	res.send(
// 		'Hello admin you are athenticated and Logged in and you can update, delete all accounts because your the admin!'
// 	);
// });

// update request to a existing user so the owner or the admin can update this user
userRouter.put('/:id', verifyCheckUser, updateUser);

// delete request to a existing user so the owner or the admin can delete this user
userRouter.delete('/:id', verifyCheckUser, deleteUsers);

// get a specific hotel request to existing user so the owner or the admin can get this user
userRouter.get('/:id', verifyCheckUser, getUniqueUser);

// getting all hotel from the existing users so the admin can get all users since only the admin can do this
userRouter.get('/', verifyCheckAdmin, getAllUsers);

export default userRouter;
