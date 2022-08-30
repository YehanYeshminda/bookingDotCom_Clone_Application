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

// get all hotels using queries
export const getAllHotels = async (req, res, next) => {
	const { min, max, ...others } = req.query;

	try {
		// to get all the hotels with a specific property
		const allHotels = await Hotel.find({
			...others,
			// if no mimimum then 1 else no maxmimum provided then 999
			cheapestPrice: { $gt: min || 1, $lt: max || 999 }, // greater than minimum and less than maximum
		}).limit(req.query.limit);
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

// get the number of the types which is available in the names below
export const countByType = async (req, res, next) => {
	try {
		const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
		const apartmentCount = await Hotel.countDocuments({ type: 'apartment' });
		const resortCount = await Hotel.countDocuments({ type: 'resort' });
		const villaCount = await Hotel.countDocuments({ type: 'villa' });
		const cabinCount = await Hotel.countDocuments({ type: 'cabin' });

		res.status(200).json([
			{
				type: 'hotel',
				count: hotelCount,
			},
			{
				type: 'apartment',
				count: apartmentCount,
			},
			{
				type: 'resort',
				count: resortCount,
			},
			{
				type: 'villa',
				count: villaCount,
			},
			{
				type: 'cabin',
				count: cabinCount,
			},
		]);
	} catch (err) {
		next(err);
	}
};

// get all rooms for an hotel
export const getAllRoomsPerHotel = async (req, res, next) => {
	try {
		const getHotel = await Hotel.findById(req.params.hotelid);
		const listOfRooms = await Promise.all(
			getHotel.rooms.map((room) => {
				return Room.findById(room);
			})
		);

		res.status(200).json(listOfRooms);
	} catch (error) {
		next(error);
	}
};
