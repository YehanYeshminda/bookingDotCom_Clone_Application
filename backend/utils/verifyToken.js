import Jwt from 'jsonwebtoken';
import { createError } from './error.js'; // this create error is from the  error.js file

export const verifyToken = (req, res, next) => {
	const token = req.cookies.access_token;

	// if there is no token
	if (!token) {
		return next(createError(401, 'You are not Autheticated!'));
	}

	// verifying the token using the secret key and the token which is passed in
	Jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
		if (err) return next(createError(401, 'Given Token is not valid'));

		// if the token is valid and if we are given access
		req.user = user;

		// will run this middle ware if there is no error which means go to the next operation
		next();
	});
};
