import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ data }) => {
	return (
		<div className="border border-gray-400 p-2.5 flex rounded-md justify-between gap-5 mb-5">
			<img
				src={
					data.photos[0] === null
						? data.photos[0]
						: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
				}
				alt=""
				className="w-200 h-200 cover"
			/>
			<div className="flex flex-col gap-2.5 flex-[2]">
				<h1 className="text-xl font-semibold text-blue-500">{data.name}</h1>
				<span className="text-xs">{data.distance} from center</span>
				<span className="text-xs bg-green-600 text-white max-w-maxContent p-1 rounded-md">
					Free airport taxi
				</span>
				<span className="text-xs font-semibold">
					Studio Apartment with Air conditioning
				</span>
				<span className="text-xs">{data.desc}</span>
				<span className="text-xs text-green-700 font-semibold">
					Free cancellation{' '}
				</span>
				<span className="text-xs text-green-500">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="flex-1 flex flex-col justify-between">
				{data.rating && (
					<div className="flex justify-between">
						<span className="font-semibold">Excellent</span>
						<button
							className="bg-blue-500 text-white p-2 font-semibold border-none"
							type="button"
						>
							{data.rating}
						</button>
					</div>
				)}
				<div className="text-right flex flex-col gap-1">
					<span className="text-lg">${data.cheapestPrice}</span>
					<span className="text-xs text-gray-500">Includes taxes and fees</span>
					<Link to={`/hotels/${data._id}`}>
						<button
							className="bg-blue-500 text-white font-semibold pr-2.5 pl-2.5 border-none cursor-pointer rounded-md"
							type="button"
						>
							See availability
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
