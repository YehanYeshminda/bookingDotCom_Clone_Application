import useFetch from '../hooks/useFetch';

const FeaturedCities = () => {
	const url =
		'http://localhost:5000/api/hotels/countByCity?cities=Galle,Hikkaduwa,Ambalangoda';

	const { data, loading, error } = useFetch(url);

	console.log(data);

	return (
		<div className="w-full max-w-5xl flex justify-between gap-5 z-1">
			{loading ? (
				'Loading please Wait.....'
			) : (
				<>
					<div className="relative text-white rounded overflow-hidden h-64">
						<img
							src="https://cf.bstatic.com/xdata/images/city/540x270/685312.webp?k=fa2ba65615a25fceb71418276bb66e0b05e71f999168e5ac204bce73007c4668&o="
							alt=""
							className="w-full object-cover h-full"
						/>
						<div className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
							<h1>Galle</h1>
							<h2>{data[0]} Properties</h2>
						</div>
					</div>
					<div className="relative text-white rounded overflow-hidden h-64">
						<img
							src="https://cf.bstatic.com/xdata/images/city/540x270/685328.webp?k=8ddb065ac9d830017d70da39973913ea048d86dfed1d4af46062963c45574306&o="
							alt=""
							className="w-full object-cover h-full"
						/>
						<div className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
							<h1>Hikkaduwa</h1>
							<h2>{data[1]} Properties</h2>
						</div>
					</div>
					<div className="relative text-white rounded overflow-hidden h-64">
						<img
							src="https://cf.bstatic.com/xdata/images/city/540x270/685338.webp?k=cf190088681ea96afbdb5dfb92ae4011ea92a0df6054001a65c0f5b21f1eb2a3&o="
							alt=""
							className="w-full object-cover h-full"
						/>
						<div className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
							<h1>Ambalangoda</h1>
							<h2>{data[2]} Properties</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default FeaturedCities;
