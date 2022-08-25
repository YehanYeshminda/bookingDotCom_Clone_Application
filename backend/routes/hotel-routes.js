import express from 'express';
import {
	createHotel,
	deleteHotels,
	getAllHotels,
	getUniqueHotel,
	updateHotel,
} from '../controllers/hotel-controller.js';

const hotelRouter = express.Router();

// post request to a new hotel
hotelRouter.post('/', createHotel);

// update request to a existing hotel
hotelRouter.put('/:id', updateHotel);

// delete request to a existing hotel
hotelRouter.delete('/:id', deleteHotels);

// get a specific hotel request to existing hotels
hotelRouter.get('/:id', getUniqueHotel);

// getting all hotel from the existing hotels
hotelRouter.get('/', getAllHotels);

export default hotelRouter;
