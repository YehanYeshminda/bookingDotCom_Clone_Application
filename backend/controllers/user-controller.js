import User from '../models/User.js';

// update a existing user
export const updateUser = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body, // after updating this will return the new version of the updated one because new = true
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		next(error);
	}
};

// delete a existing user
export const deleteUsers = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json('User has been deleted');
	} catch (error) {
		next(error);
	}
};

// get a unique user
export const getUniqueUser = async (req, res, next) => {
	try {
		const specificUser = await User.findById(req.params.id);
		res.status(200).json(specificUser);
	} catch (error) {
		next(error);
	}
};

// get all users
export const getAllUsers = async (req, res, next) => {
	try {
		const allUsers = await User.find();
		res.status(200).json(allUsers);
	} catch (error) {
		// error handling using a middleware
		next(error);
	}
};
