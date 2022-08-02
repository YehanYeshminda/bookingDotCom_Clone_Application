import FeaturedCities from '../../components/FeaturedCities';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="mt-12 flex flex-col items-center gap-8">
				<FeaturedCities />

				<h1 className="w-5xl">Browse By Property Type!</h1>
			</div>
		</div>
	);
};

export default Home;
