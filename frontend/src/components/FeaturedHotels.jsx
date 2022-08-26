import useFetch from '../hooks/useFetch';

const FeaturedHotels = () => {
	const url = 'http://localhost:5000/api/hotels?featured=true&limit=4';

	const { data, loading, error } = useFetch(url);

	console.log(data);
	return (
		<div className="w-full max-w-5xl flex justify-between gap-5">
			{loading ? (
				'Loading please Wait.....'
			) : (
				<>
					{data &&
						data.map((item) => {
							return (
								<div className="flex-1 gap-2.5 flex flex-col" key={item._id}>
									{/* if there is no image then display another else diplay the image in the db */}
									<img
										src={
											item.photos[0] === null
												? item.photos[0]
												: 'https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg'
										}
										alt=""
										className="w-full h-full"
									/>
									<span className="font-extrabold">{item.name}</span>
									<span className="font-normal">{item.city}</span>
									<span className="font-semibold">
										Starting from ${item.cheapestPrice}
									</span>

									{/* if there is rating then show this */}
									{item.rating && (
										<div className="rating">
											<button className="bg-blue-800 text-white border-none px-1 py-1 mr-2.5 font-bold">
												{item.rating}
											</button>
											<span className="text-lg">Excellent</span>
										</div>
									)}
								</div>
							);
						})}
				</>
			)}
		</div>
	);
};

export default FeaturedHotels;
