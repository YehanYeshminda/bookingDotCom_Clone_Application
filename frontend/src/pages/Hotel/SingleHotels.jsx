import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import MailList from '../../components/MailList';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const SingleHotels = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];

	console.log(id);

	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	const url = `http://localhost:5000/api/hotels/find/${id}`;

	const { data, loading, error } = useFetch(url);

	// getting the sent in state using the context API
	const { date, options } = useContext(SearchContext);

	console.log(options);
	// calculating the difference between days
	const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	const calcDayDifference = (date1, date2) => {
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
		const diffDays = Math.abs(timeDiff / MILISECONDS_PER_DAY);

		return diffDays;
	};

	const totalDaysOfStay = calcDayDifference(date[0].endDate, date[0].startDate);

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};

	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === 'l') {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};

	return (
		<div>
			<Navbar />
			<Header type="list" />
			{loading ? (
				'Loading please wait...'
			) : (
				<div className="flex flex-col items-center mt-5">
					{open && (
						<div className="sticky top-0 left-10 right-10 w-full h-[100vh] bg-trasparentBlack z-50 flex items-center">
							<FontAwesomeIcon
								icon={faCircleXmark}
								className="absolute top-5 right-5 text-3xl text-gray-400 cursor-pointer"
								onClick={() => setOpen(false)}
							/>
							<FontAwesomeIcon
								icon={faCircleArrowLeft}
								className="m-5 text-5xl text-gray-500 cursor-pointer"
								onClick={() => handleMove('l')}
							/>
							<div className="w-full h-full flex justify-center items-center">
								<img
									src={data?.photos[slideNumber]}
									alt=""
									className="w-3/4 h-[80vh]"
								/>
							</div>
							<FontAwesomeIcon
								icon={faCircleArrowRight}
								className="m-5 text-5xl text-gray-500 cursor-pointer"
								onClick={() => handleMove('r')}
							/>
						</div>
					)}
					<div className="w-full max-w-5xl flex flex-col gap-2.5 relative">
						<button
							className="absolute top-2.5 right-0 pr-2.5 pl-2.5 pt-2.5 pb-2.5 bg-blue-600 text-white font-semibold rounded-xs border-none cursor-pointer"
							type="button"
						>
							Reserve or Book Now!
						</button>
						<h1 className="text-lg font-bold">{data.name}</h1>
						<div className="text-md flex items-center gap-2.5">
							<FontAwesomeIcon icon={faLocationDot} />
							<span>{data.address}</span>
						</div>
						<span className="text-blue-600 font-semibold">
							Excellent location – {data.distance}m from city center
						</span>
						<span className="text-green-600 font-semibold">
							Book a stay over ${data.cheapestPrice} at this property and get a
							free airport taxi
						</span>
						<div className="flex flex-wrap justify-between">
							{data.photos?.map((photo, i) => (
								<div className="w-1/3" key={i}>
									<img
										onClick={() => handleOpen(i)}
										src={photo}
										alt=""
										className="w-full cover"
									/>
								</div>
							))}
						</div>
						<div className="flex justify-between gap-5 mt-5">
							<div className="flex-[3]">
								<h1 className="hotelTitle">Stay in the heart of City</h1>
								<p className="">{data.desc}</p>
							</div>
							<div className="flex-1 text-md mt-5 bg-blue-200 p-5 flex flex-col gap-5">
								<h1 className="text-lg text-gray-600 font-semibold">
									Perfect for a {totalDaysOfStay}-night stay!
								</h1>
								<span className="text-md text-gray-600">
									Located in the real heart of {data.city}, this property has an
									excellent location score of{' '}
									{data.rating ? data.rating : '(No Ratings Yet)'}!
								</span>
								<h2 className="font-medium">
									<b>${totalDaysOfStay * data.cheapestPrice * options.rooms}</b>{' '}
									({totalDaysOfStay} nights)
								</h2>
								<button
									type="button"
									className="top-2.5 right-0 pr-2.5 pl-2.5 pt-2.5 pb-2.5 bg-blue-600 text-white font-semibold rounded-xs border-none cursor-pointer"
								>
									Reserve or Book Now!
								</button>
							</div>
						</div>
					</div>
					<MailList />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default SingleHotels;
