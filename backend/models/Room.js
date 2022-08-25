import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		maxPeople: {
			type: Number,
			required: true, // setting a default value for an schema
		},
		roomNumber: [{ number: Number, unavailableDates: [{ type: [Date] }] }], // array of room numbers and the unavailable dates
	},
	{ timestamps: true }
);

export default mongoose.model('Rooms', roomSchema);
