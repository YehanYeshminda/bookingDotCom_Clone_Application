import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
	const [credentions, setCredentions] = useState({
		username: undefined,
		password: undefined,
	});

	const navigate = useNavigate();

	// using the state context to set the user and get the user
	const { userInfo, loading, error, dispatch } = useContext(
		AuthenticationContext
	);

	// getting the changes in using the id and the value depending on the id name
	const handleChange = (e) => {
		setCredentions((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({
			type: 'LOGIN_START', // no payload is passed we just update the loading state
		});

		// starting the login process
		try {
			const res = await axios.post(
				'http://localhost:5000/api/auth/login',
				credentions
			);

			// if the login is successful
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
			navigate('/'); // if the request is a success
		} catch (error) {
			dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
		}
	};

	console.log(userInfo);

	return (
		<div className="h-[100vh] flex justify-center items-center">
			<div className="flex flex-col gap-2.5">
				<input
					type="text"
					placeholder="username"
					id="username"
					onChange={handleChange}
					className="h-8 p-2.5 border border-black"
				/>
				<input
					type="text"
					placeholder="password"
					id="password"
					onChange={handleChange}
					className="h-8 p-2.5 border border-black"
				/>

				<button
					disabled={loading}
					onClick={handleClick}
					className="border-none pt-2.5 pb-2.5 bg-[#0071c2] text-white font-bold cursor-pointer rounded-lg disabled:bg-[#0071c28c] disabled:cursor-not-allowed"
				>
					Login
				</button>

				{error && <span>{error.message}</span>}
			</div>
		</div>
	);
};

export default SingIn;
