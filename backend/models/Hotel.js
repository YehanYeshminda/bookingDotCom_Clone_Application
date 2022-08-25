import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	distance: {
		type: String,
		required: true,
	},
	photos: {
		type: [String], // an array of images because multiple images for the hotels
	},
	desc: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: false,
		min: 0,
		max: 5,
	},
	rooms: {
		type: [String], // this will include rooms ids per hotel
	},
	cheapestPrice: {
		type: Number,
		required: true,
	},
	featured: {
		type: Boolean,
		required: false,
	},
});

export default mongoose.model('Hotels', hotelSchema);
