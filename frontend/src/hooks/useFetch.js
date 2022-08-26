import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const res = await axios.get(url);
				setData(res.data);
			} catch (error) {
				setError(error);
			}

			setLoading(false);
		};

		fetchData();
	}, [url]); // if we dont want the values to change on click then we can remove this

	const reFetch = async () => {
		setLoading(true);

		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			setError(error);
		}

		setLoading(false);
	};

	return { data, loading, error, reFetch };
};

export default useFetch;
