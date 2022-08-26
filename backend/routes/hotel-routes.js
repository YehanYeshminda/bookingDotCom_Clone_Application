import express from 'express';
import {
	countByCity,
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
hotelRouter.get('/find/:id', getUniqueHotel);

// getting all hotel from the existing hotels
hotelRouter.get('/', getAllHotels);

hotelRouter.get('/countByCity', countByCity); // used to count the total number of cities

hotelRouter.get('/countByType', getAllHotels); // used to count the total number of type of cities

export default hotelRouter;
