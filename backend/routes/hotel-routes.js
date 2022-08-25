import express from 'express';
import {
	createHotel,
	deleteHotels,
	getAllHotels,
	getUniqueHotel,
	updateHotel,
} from '../controllers/hotel-controller.js';
import { verifyCheckAdmin } from '../utils/verifyToken.js';

const hotelRouter = express.Router();

// post request to a new hotel and we check if the user is a admin to add new hotels
hotelRouter.post('/', verifyCheckAdmin, createHotel);

// update request to a existing hotel and we check if the user is an admin to update hotels
hotelRouter.put('/:id', verifyCheckAdmin, updateHotel);

// delete request to a existing hotel and we check if the user is an admin to delete hotels
hotelRouter.delete('/:id', verifyCheckAdmin, deleteHotels);

// get a specific hotel request to existing hotels
hotelRouter.get('/:id', getUniqueHotel);

// getting all hotel from the existing hotels
hotelRouter.get('/', getAllHotels);

export default hotelRouter;
