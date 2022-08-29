import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../context/AuthenticationContext';

const Navbar = () => {
	// using the state context to set the user and get the user
	const { userInfo } = useContext(AuthenticationContext);

	return (
		<div className="h-14 bg-blue-900 flex justify-center">
			<div className="w-full max-w-5xl flex text-white items-center justify-between">
				<Link to="/">
					<span className="font-semibold">Booking.com</span>
				</Link>

				{/* if a user is present then don't show the login and the register */}
				{userInfo ? (
					userInfo.username
				) : (
					<div className="">
						<button className="ml-5 border border-none py-1.5 px-2.5 cursor-pointer text-blue-700 bg-white font-semibold">
							Register
						</button>
						<Link to="/login">
							<button className="ml-5 border border-none py-1.5 px-2.5 cursor-pointer text-blue-700 bg-white font-semibold">
								Login
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
