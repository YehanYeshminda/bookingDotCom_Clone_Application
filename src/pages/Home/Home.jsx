import FeaturedCities from '../../components/FeaturedCities';
import FeaturedHotels from '../../components/FeaturedHotels';
import Header from '../../components/Header';
import MailList from '../../components/MailList';
import Navbar from '../../components/Navbar';
import PropertyList from '../../components/PropertyList';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="mt-12 flex flex-col items-center gap-8">
				<FeaturedCities />

				<h1 className="w-5xl text-2xl font-medium">Browse By Property Type!</h1>
				<PropertyList />

				<h1 className="w-5xl text-2xl font-medium">Home Guests Love!</h1>
				<FeaturedHotels />
				<MailList />
			</div>
		</div>
	);
};

export default Home;
