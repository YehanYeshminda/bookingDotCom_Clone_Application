import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';

const List = () => {
	const location = useLocation();

	console.log(location);
	return (
		<div>
			<Navbar />
			<Header type="list" />

			<div className="flex mt-5 justify-center">
				<div className="w-full max-w-5xl flex gap-5">
					<div className="flex-1 bg-yellow-300 p-2.5 rounded sticky">
						<h1 className="text-xl font-semibold text-gray-500 mb-2.5">
							Search
						</h1>
						<div className="lsItem">
							<label>Destination</label>
							<input type="text" />
						</div>
						<div className="lsItem">
							<label>Check-in Date</label>
							<input type="text" />
						</div>
						<div className="lsItem">
							<label>Options</label>
							<div className="lsOptions">
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Min price <small>per night</small>
									</span>
									<input type="number" className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input type="number" className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Adult</span>
									<input type="number" min={1} className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Children</span>
									<input type="number" min={0} className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Room</span>
									<input type="number" min={1} className="lsOptionInput" />
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="flex-[3]"></div>
				</div>
			</div>
		</div>
	);
};

export default List;
