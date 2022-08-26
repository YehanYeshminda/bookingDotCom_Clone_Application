import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="h-14 bg-blue-900 flex justify-center">
			<div className="w-full max-w-5xl flex text-white items-center justify-between">
				<Link to="/">
					<span className="font-semibold">Booking.com</span>
				</Link>
				<div className="">
					<button className="ml-5 border border-none py-1.5 px-2.5 cursor-pointer text-blue-700 bg-white font-semibold">
						Register
					</button>
					<button className="ml-5 border border-none py-1.5 px-2.5 cursor-pointer text-blue-700 bg-white font-semibold">
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
