import express from 'express';
import {
	createRoom,
	deleteRooms,
	getAllRooms,
	getUniqueRoom,
	updateRoom,
} from '../controllers/room-controller.js';
import { verifyCheckAdmin } from '../utils/verifyToken.js';

const roomRouter = express.Router();

// post request to a new hotel and we check if the user is a admin to add new hotels
roomRouter.post('/:hotelId', verifyCheckAdmin, createRoom);

// update request to a existing hotel and we check if the user is an admin to update hotels
roomRouter.put('/:id', verifyCheckAdmin, updateRoom);

// delete request to a existing hotel and we check if the user is an admin to delete hotels
// room id and then hotel id to delete a room
roomRouter.delete('/:id/:hotelId', verifyCheckAdmin, deleteRooms);

// get a specific hotel request to existing hotels
roomRouter.get('/:id', getUniqueRoom);

// getting all hotel from the existing hotels
roomRouter.get('/', getAllRooms);

export default roomRouter;
