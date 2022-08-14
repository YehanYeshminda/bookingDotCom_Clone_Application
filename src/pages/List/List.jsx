import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem';

const List = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination);
	const [date, setdate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setoptions] = useState(location.state.options);

	return (
		<div>
			<Navbar />
			<Header type="list" />

			<div className="flex mt-5 justify-center">
				<div className="w-full max-w-5xl flex gap-5">
					<div className="flex-1 bg-yellow-300 p-2.5 rounded sticky top-3 h-425">
						<h1 className="text-xl font-semibold text-gray-500 mb-2.5">
							Search
						</h1>
						<div className="flex flex-col gap-1 mb-2.5">
							<label className="text-sm" placeholder={options.destination}>
								Destination
							</label>
							<input
								className="h-7 border-none p-3"
								placeholder="Destination"
								type="text"
							/>
						</div>
						<div className="flex flex-col gap-1 mb-2.5">
							<label className="text-sm">Check-in Date</label>
							<span
								onClick={() => setOpenDate(!openDate)}
								className="h-8 p-1 bg-white flex items-center cursor-pointer"
							>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
								date[0].startDate,
								'MM/dd,yyyy'
							)}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setdate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="lsItem">
							<label>Options</label>
							<div className="p-2.5">
								<div className="flex justify-between mb-2.5 text-gray-600 text-sm">
									<span className="lsOptionText">
										Min price <small>per night</small>
									</span>
									<input type="number" className="w-12" />
								</div>
								<div className="flex justify-between mb-2.5 text-gray-600 text-sm">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input type="number" className="w-12" />
								</div>
								<div className="flex justify-between mb-2.5 text-gray-600 text-sm">
									<span className="lsOptionText">Adult</span>
									<input
										type="number"
										min={1}
										className="w-12"
										placeholder={options.adult}
									/>
								</div>
								<div className="flex justify-between mb-2.5 text-gray-600 text-sm">
									<span className="lsOptionText">Children</span>
									<input
										type="number"
										min={0}
										className="w-12"
										placeholder={options.children}
									/>
								</div>
								<div className="flex justify-between mb-2.5 text-gray-600 text-sm">
									<span className="lsOptionText">Room</span>
									<input
										type="number"
										min={1}
										className="w-12"
										placeholder={options.rooms}
									/>
								</div>
							</div>
						</div>
						<button className="p-2.5 bg-blue-600 text-white border-none w-full font-semibold cursor-pointer">
							Search
						</button>
					</div>
					<div className="flex-[3]">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
