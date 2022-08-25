import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';

import { createError } from '../utils/error.js';

// when creating a new room the id should be added to the hotel array on the room

// creating a room and then adding the room id into the hotels array
export const createRoom = async (req, res, next) => {
	const hotelId = req.params.hotelId; // we enter the hotel id using the params
	const newRoom = new Room(req.body);

	try {
		const savedRoom = await newRoom.save();

		// this is used to update the hotel
		try {
			await Hotel.findByIdAndUpdate(hotelId, {
				// push lets us push any type of value into the array inside of the mongo db
				$push: { rooms: savedRoom._id },
			});
		} catch (error) {
			next(error);
		}

		res.status(200).json(savedRoom);
	} catch (error) {
		next(error);
	}
};

// update a existing room
export const updateRoom = async (req, res, next) => {
	try {
		const updatedRoom = await Room.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body, // after updating this will return the new version of the updated one because new = true
			},
			{ new: true }
		);
		res.status(200).json(updatedRoom);
	} catch (error) {
		next(error);
	}
};

// delete a existing room
export const deleteRooms = async (req, res, next) => {
	const hotelId = req.params.hotelId; // we enter the hotel id using the params

	try {
		await Room.findByIdAndDelete(req.params.id);

		try {
			await Hotel.findByIdAndUpdate(hotelId, {
				// pull lets us remove any type of value from an array inside of the mongo db
				$pull: { rooms: req.params.id },
			});
		} catch (error) {
			next(error);
		}

		res.status(200).json('Room has been deleted');
	} catch (error) {
		next(error);
	}
};

// get a unique room
export const getUniqueRoom = async (req, res, next) => {
	try {
		const specificRoom = await Room.findById(req.params.id);
		res.status(200).json(specificRoom);
	} catch (error) {
		next(error);
	}
};

// get all room
export const getAllRooms = async (req, res, next) => {
	try {
		const allRooms = await Room.find();
		res.status(200).json(allRooms);
	} catch (error) {
		// error handling using a middleware
		next(error);
	}
};
