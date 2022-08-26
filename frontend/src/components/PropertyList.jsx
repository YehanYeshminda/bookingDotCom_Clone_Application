import React from 'react';
import useFetch from '../hooks/useFetch';

const PropertyList = () => {
	const url = 'http://localhost:5000/api/hotels/countByType';

	const { data, loading, error } = useFetch(url);

	console.log(data);

	return (
		<div className="w-full max-w-5xl flex justify-between gap-5">
			{loading ? (
				'Loading please Wait.....'
			) : (
				<>
					<div className="rounded overflow-hidden cursor-pointer flex-1">
						<img
							src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
							alt=""
							className="w-full h-40 object-cover"
						/>
						<div className="pListTitles">
							<h1 className="text-[18px] font-bold capitalize">
								{data[0]?.type}
							</h1>
							<h2 className="text-[14px] font-normal capitalize">
								{data[0]?.count} {data[0]?.type}s
							</h2>
						</div>
					</div>
					<div className="rounded overflow-hidden cursor-pointer flex-1">
						<img
							src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
							alt=""
							className="w-full h-40 object-cover"
						/>
						<div className="pListTitles">
							<h1 className="text-[18px] font-bold capitalize">
								{data[1]?.type}
							</h1>
							<h2 className="text-[14px] font-normal capitalize">
								{data[1]?.count} {data[1]?.type}s
							</h2>
						</div>
					</div>
					<div className="rounded overflow-hidden cursor-pointer flex-1">
						<img
							src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
							alt=""
							className="w-full h-40 object-cover"
						/>
						<div className="pListTitles">
							<h1 className="text-[18px] font-bold capitalize">
								{data[2]?.type}
							</h1>
							<h2 className="text-[14px] font-normal capitalize">
								{data[2]?.count} {data[2]?.type}s
							</h2>
						</div>
					</div>
					<div className="rounded overflow-hidden cursor-pointer flex-1">
						<img
							src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
							alt=""
							className="w-full h-40 object-cover"
						/>
						<div className="pListTitles">
							<h1 className="text-[18px] font-bold capitalize">
								{data[3]?.type}
							</h1>
							<h2 className="text-[14px] font-normal capitalize">
								{data[3]?.count} {data[3]?.type}s
							</h2>
						</div>
					</div>
					<div className="rounded overflow-hidden cursor-pointer flex-1">
						<img
							src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
							alt=""
							className="w-full h-40 object-cover"
						/>
						<div className="pListTitles">
							<h1 className="text-[18px] font-bold capitalize">
								{data[4]?.type}
							</h1>
							<h2 className="text-[14px] font-normal capitalize">
								{data[4]?.count} {data[4]?.type}s
							</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default PropertyList;
