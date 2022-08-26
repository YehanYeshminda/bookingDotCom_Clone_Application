import Hotel from '../models/Hotel.js';

// create a new hotel
export const createHotel = async (req, res, next) => {
	const newHotel = new Hotel(req.body);

	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel);
	} catch (error) {
		next(error);
	}
};

// update a existing hotel
export const updateHotel = async (req, res, next) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body, // after updating this will return the new version of the updated one because new = true
			},
			{ new: true }
		);
		res.status(200).json(updatedHotel);
	} catch (error) {
		next(error);
	}
};

// delete a existing hotel
export const deleteHotels = async (req, res, next) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json('Hotel has been deleted');
	} catch (error) {
		next(error);
	}
};

// get a unique hotel
export const getUniqueHotel = async (req, res, next) => {
	try {
		const specificHotel = await Hotel.findById(req.params.id);
		res.status(200).json(specificHotel);
	} catch (error) {
		next(error);
	}
};

// get all hotels
export const getAllHotels = async (req, res, next) => {
	try {
		const allHotels = await Hotel.find();
		res.status(200).json(allHotels);
	} catch (error) {
		// error handling using a middleware
		next(error);
	}
};

// used to get the count of the number of cities when each city is provided
export const countByCity = async (req, res, next) => {
	const cities = req.query.cities.split(',');
	try {
		const list = await Promise.all(
			cities.map((city) => {
				return Hotel.countDocuments({ city: city });
			})
		);
		res.status(200).json(list);
	} catch (err) {
		next(err);
	}
};
