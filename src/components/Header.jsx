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

const Header = () => {
	// use styled components for the animations and the errors found
	return (
		<div className="bg-blue-900 text-white flex justify-center relative">
			<div className="w-full max-w-5xl mt-5 mb-[100px] ml-0 mr-0">
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

				<div className="h-7 bg-white border-yellow-400 border-2 flex items-center justify-around px-0 py-5 rounded-2 absolute bottom-6 w-full max-w-5xl">
					<div className="flex items-center gap-[10px] ">
						<FontAwesomeIcon icon={faBed} className="text-gray-400" />
						<input
							type="text"
							placeholder="where are you going?"
							className="border-none outline-none text-black"
						/>
					</div>
					<div className="flex items-center gap-[10px] ">
						<FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
						<span className="text-gray-400 cursor-pointer">Date to Date</span>
					</div>
					<div className="flex items-center gap-[10px] ">
						<FontAwesomeIcon icon={faPerson} className="text-gray-400" />
						<span className="text-gray-400 cursor-pointer">
							2 Adults 2 Children 1 Room
						</span>
					</div>
					<div className="flex items-center gap-[10px] ">
						<button className="bg-blue-500 text-white font-semibold border-none py-[5px] px-2.5 cursor-pointer">
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
