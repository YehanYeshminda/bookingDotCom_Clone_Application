import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const ReserveHotel = ({ setOpen, hotelId }) => {
	const [selectRoom, setSelectRoom] = useState([]);
	const navigate = useNavigate();

	const { date } = useContext(SearchContext);

	const url = `http://localhost:5000/api/hotels/rooms/${hotelId}`;

	const { data, loading, error } = useFetch(url);

	const handleSelect = (e) => {
		const selected = e.target.checked;

		const value = e.target.value;

		setSelectRoom(
			selected
				? [...selectRoom, value]
				: selectRoom.filter((item) => item !== value)
		);
	};

	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);

		const date = new Date(start.getTime());

		const dates = [];

		while (date <= end) {
			dates.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}

		return dates;
	};

	const allDatesGet = getDatesInRange(date[0].startDate, date[0].endDate);

	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.some((date) =>
			allDatesGet.includes(new Date(date).getTime())
		);

		return !isFound;
	};

	const handleClick = async () => {
		try {
			await Promise.all(
				selectRoom.map((roomId) => {
					const res = axios.put(
						`http://localhost:5000/api/rooms/availability/${roomId}`,
						{ dates: allDatesGet }
					);
					return res.data;
				}),
				setOpen(false),
				navigate('/')
			);
		} catch (error) {}
	};

	return (
		<div className="w-screen h-screen bg-trasparentBlack fixed top-0 left-0 flex items-center justify-center">
			<div className="bg-white p-5 relative">
				<FontAwesomeIcon
					icon={faCircleXmark}
					onClick={() => setOpen(false)}
					className="absolute top-0 right-0 cursor-pointer"
				/>
				<span>Select your rooms : </span>
				{data &&
					data.map((item) => {
						return (
							<div className="flex items-center gap-12 p-5">
								<div className="flex flex-col gap-1">
									<div className="font-bold">{item.title}</div>
									<div className="font-semibold">{item.desc}</div>
									<div className="text-sm">
										Max People : <b>{item.maxPeople}</b>
									</div>
									<div className="font-semibold">Price : {item.price}</div>
								</div>

								<div className="flex flex-wrap gap-1 text-xs text-gray-400">
									{item.roomNumber.map((roomNum) => {
										return (
											<div className="flex flex-col">
												<label>{roomNum.number}</label>
												<input
													type="checkbox"
													value={roomNum._id}
													onChange={handleSelect}
													disabled={!isAvailable(roomNum)}
												/>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				<button
					onClick={handleClick}
					className="border-none pt-3 pb-5 bg-blue-500 text-white font-semibold cursor-pointer rounded-md w-full mt-5"
				>
					Reserve Now
				</button>
			</div>
		</div>
	);
};

export default ReserveHotel;
