import Jwt from 'jsonwebtoken';
import { createError } from './error.js'; // this create error is from the  error.js file

export const verifyToken = (req, res, next) => {
	const token = req.cookies.access_token;

	// if there is no token
	if (!token) {
		return next(createError(403, 'You are not Autheticated!'));
	}

	// verifying the token using the secret key and the token which is passed in
	Jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
		if (err) return next(createError(403, 'Given Token is not valid'));

		// if the token is valid and if we are given access
		req.user = user;

		// will run this middle ware if there is no error which means go to the next operation
		next();
	});
};

// verify the correct user or if the user has logged in
export const verifyCheckUser = (req, res, next) => {
	verifyToken(req, res, next, () => {
		// using the user which is defined in the top , if the user id the user or the admin then only they can do crud operations inside of the application
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, 'You are not authorized!'));
		}
	});
};

// verify the correct admin or if the admin has logged in
export const verifyCheckAdmin = (req, res, next) => {
	verifyToken(req, res, next, () => {
		// using the user which is defined in the top , if the user id the user or the admin then only they can do crud operations inside of the application
		if (req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, 'You are not authorized!'));
		}
	});
};
