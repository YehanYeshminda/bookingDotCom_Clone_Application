import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';

// needed css files for the calender UI
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
	const [openDate, setOpenDate] = useState(false);
	const [destination, setDestination] = useState('');

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	const [openOptions, setOpenOptions] = useState(false);
	const navigate = useNavigate();

	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		rooms: 1,
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
			};
		});
	};

	// in order to send destination date and options to the /hotels page
	const handleSearch = () => {
		navigate('/hotels', { state: { destination, date, options } });
	};

	return (
		<div className="bg-blue-900 text-white flex justify-center relative">
			<div
				className={
					type === 'list'
						? 'w-full max-w-5xl mt-5 mb-0 ml-0 mr-0'
						: 'w-full max-w-5xl mt-5 mb-[100px] ml-0 mr-0'
				}
			>
				<div className="flex gap-10 mb-12">
					<div className="flex items-center gap-2.5 hover:bg-white hover:text-black px-2 py-2 rounded-2xl">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="flex items-center gap-2.5 hover:bg-white hover:text-black px-2 py-2 rounded-2xl">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="flex items-center gap-2.5 hover:bg-white hover:text-black px-2 py-2 rounded-2xl">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="flex items-center gap-2.5 hover:bg-white hover:text-black px-2 py-2 rounded-2xl">
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className="flex items-center gap-2.5 hover:bg-white hover:text-black px-2 py-2 rounded-2xl">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</div>
				</div>
				{type !== 'list' && (
					<>
						<h1 className="font-semibold text-3xl">
							A Life of Dicount's? It's a Genius Idea!
						</h1>
						<p className="my-5 mx-0">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
							delectus!
						</p>
						<button className="bg-blue-500 text-white font-semibold border-none p-2.5 cursor-pointer">
							Sign in/ Register
						</button>
						<div className="h-12 bg-white border-yellow-400 border-2 flex items-center justify-around px-0 py-5 rounded-2 absolute bottom-6 w-full max-w-5xl rounded-lg">
							<div className="flex items-center gap-[10px] ">
								<FontAwesomeIcon icon={faBed} className="text-gray-400" />
								<input
									type="text"
									placeholder="where are you going?"
									className="border-none outline-none text-black"
									/* -------------------------------------------------------------------------- */
									// setting the destination to send
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className="flex items-center gap-[10px] ">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="text-gray-400"
								/>
								<span
									className="text-gray-400 cursor-pointer"
									onClick={() => setOpenDate(!openDate)} // if its true set to false else if false set to true
								>
									{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
										date[0].endDate,
										'MM/dd/yyyy'
									)}`}
								</span>

								{/* calender comp */}
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="absolute top-12 z-20"
									/>
								)}
							</div>
							<div className="flex items-center gap-[10px] ">
								<FontAwesomeIcon icon={faPerson} className="text-gray-400" />
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="text-gray-400 cursor-pointer"
								>
									{`${options.adult} adult . ${options.children} children . ${options.rooms} room`}
								</span>
								{openOptions && (
									<div className="absolute top-[50px] bg-white text-gray-600 rounded-[5px] shadow-2xl z-20">
										<div className="w-48 flex justify-between m-2.5">
											<span className="optiontext">Adult</span>
											<div className="flex items-center gap-2 text-[16px] text-black">
												<button
													disabled={options.adult <= 1}
													onClick={() => handleOption('adult', 'd')}
													className="w-8 h-8 border border-blue-600 text-blue-600 cursor-pointer bg-white disabled:cursor-not-allowed"
												>
													-
												</button>
												<span className="">{options.adult}</span>
												<button
													onClick={() => handleOption('adult', 'i')}
													className="w-8 h-8 border border-blue-600 text-blue-600 cursor-pointer bg-white"
												>
													+
												</button>
											</div>
										</div>
										<div className="w-48 flex justify-between m-2.5">
											<span className="optiontext">Children</span>
											<div className="flex items-center gap-2 text-[16px] text-black">
												<button
													disabled={options.children <= 0}
													onClick={() => handleOption('children', 'd')}
													className="w-8 h-8 border border-blue-600 text-blue-600 cursor-pointer bg-white disabled:cursor-not-allowed"
												>
													-
												</button>
												<span className="">{options.children}</span>
												<button
													onClick={() => handleOption('children', 'i')}
													className="w-8 h-8 border border-blue-600 text-blue-600 cursor-pointer bg-white"
												>
													+
												</button>
											</div>
										</div>
										<div className="w-48 flex justify-between m-2.5">
											<span className="optiontext">Rooms</span>
											<div className="flex items-center gap-2 text-[16px] text-black">
												<button
													disabled={options.rooms <= 1}
													onClick={() => handleOption('rooms', 'd')}
													className="w-8 h-8 border border-blue-600 text-blue-600 cursor-pointer bg-white disabled:cursor-not-allowed"
												>
													-
												</button>
												<span className="">{options.rooms}</span>
												<button
													onClick={() => handleOption('rooms', 'i')}
													className="w-8 h-8 border border-blue-600 text-blue-600 cursor-pointer bg-white"
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="flex items-center gap-[10px] ">
								<button
									/* -------------------------------------------------------------------------- */
									// handline the search and sending in the search request
									onClick={handleSearch}
									className="bg-blue-500 text-white font-semibold border-none py-[5px] px-2.5 cursor-pointer rounded"
								>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
