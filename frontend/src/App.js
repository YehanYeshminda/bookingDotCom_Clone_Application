import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleHotels from './pages/Hotel/SingleHotels';
import List from './pages/List/List';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<List />} />
				<Route path="/hotels/:id" element={<SingleHotels />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
