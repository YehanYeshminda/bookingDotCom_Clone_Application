import { useEffect, useReducer } from 'react';
import { createContext } from 'react';

const INITIAL_STATE = {
	userInfo: JSON.parse(localStorage.getItem('user_booking')) || null, // will check the local storage and then get the user
	loading: false,
	error: null,
};

export const AuthenticationContext = createContext(INITIAL_STATE);

// creating a reducer
const searchReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_START': // when we try to login this will then be returned
			return {
				userInfo: null,
				loading: true,
				error: null,
			};

		case 'LOGIN_SUCCESS': // when we try to login and if success this will then be returned
			return {
				userInfo: action.payload,
				loading: false,
				error: null,
			};

		case 'LOGOUT_START': // when we try to login and error this will then be returned
			return {
				userInfo: null,
				loading: false,
				error: null,
			};

		case 'LOGIN_FAIL': // when we try to login and error this will then be returned
			return {
				userInfo: null,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

// the children will be the components which we want to reach this data into
export const AuthenticationContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

	// to store the user inside of the local storage
	useEffect(() => {
		localStorage.setItem('user_booking', JSON.stringify(state.userInfo));
	}, [state.userInfo]);

	return (
		// these below are the values which we are passing into the state
		<AuthenticationContext.Provider
			value={{
				userInfo: state.userInfo,
				loading: state.loading,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
};
