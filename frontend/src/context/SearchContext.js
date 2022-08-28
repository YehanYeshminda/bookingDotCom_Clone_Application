import { useReducer } from 'react';
import { createContext } from 'react';

const INITIAL_STATE = {
	city: undefined,
	date: [],
	options: {
		adult: undefined,
		children: undefined,
		room: undefined,
	},
};

export const SearchContext = createContext(INITIAL_STATE);

// creating a reducer
const searchReducer = (state, action) => {
	switch (action.type) {
		case 'NEW_SEARCH': // when ever we call this we will then dispatch this action
			return action.payload;

		case 'RESET_SEARCH': // when ever we call this we will then dispatch this action
			return INITIAL_STATE;
		default:
			return state;
	}
};

// the children will be the components which we want to reach this data into
export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

	return (
		// these below are the values which we are passing into the state
		<SearchContext.Provider
			value={{
				city: state.city,
				date: state.date,
				options: state.options,
				dispatch,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};
