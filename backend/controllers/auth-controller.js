import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const registerAuth = async (req, res, next) => {
	try {
		// password encrytion
		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(req.body.password, salt);

		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword, // password encrytion set
		});

		await newUser.save();

		res.status(200).send('User has been Created');
	} catch (error) {
		next(error);
	}
};

// login for the user
export const loginAuth = async (req, res, next) => {
	try {
		const user = await User.findOne({
			username: req.body.username,
		});

		if (!user) return next(createError(404, 'User not found!'));

		// comparison of the encrypted password and the sent in password
		const isPasswordCorrect = await bcrypt.compare(
			req.body.password,
			user.password
		);

		// if password is wrong
		if (!isPasswordCorrect)
			return next(createError(400, 'Password is Wrong or Username is wrong!'));

		// if password is correct then we create new token using jwt
		const token = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			process.env.JWT_SECRET_KEY
		);

		// filtering some values which the users can see
		const { password, isAdmin, ...otherData } = user._doc;

		// if the password is correct
		res
			.cookie('access_token', token, {
				httpOnly: true, // does allow any client into this so more secure
			})
			.status(200)
			.json({ ...otherData });
	} catch (error) {
		next(error);
	}
};
