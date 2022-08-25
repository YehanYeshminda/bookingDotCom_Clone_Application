import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth-route.js';
import hotelRouter from './routes/hotel-routes.js';
import roomRouter from './routes/room-routes.js';
import userRouter from './routes/user-routes.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB);
		console.log('Connected to Mongo Db');
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('Mongo disconnected!');
});

// middlewares for the files to function
app.use(cookieParser()); // used to pass cookies with rhe use of jwt
app.use(express.json());

// when ever we use this end point this will then use this end point
app.use('/api/auth', authRouter); // http://localhost:5000/api/auth - this is the default path to all the routes in the authRouter
app.use('/api/hotels', hotelRouter); // http://localhost:5000/api/hotels - this is the default path to all the routes in the authRouter
app.use('/api/rooms', roomRouter); // http://localhost:5000/api/rooms - this is the default path to all the routes in the authRouter
app.use('/api/users', userRouter); // http://localhost:5000/api/users - this is the default path to all the routes in the authRouter

// error handling middle ware
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessageStatus = err.message || 'Something went wrong!';
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessageStatus,
		stack: err.stack,
	});
});

app.listen(5000, () => {
	connectDb();
	console.log('Connected to the backend...');
});
