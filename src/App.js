import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import './App.css';
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import Upcoming from "./components/Upcoming/Upcoming";
import TopRated from "./components/TopRated/TopRated";
import Movie from "./components/movie/Movie";
import Search from "./components/Search/Search";



function App() {
	const searchValue = useSelector(state => state.searchValue);
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/movies/popular' element={<Popular />} />
					<Route path='/movies/upcoming' element={<Upcoming />} />
					<Route path='/movies/top_rated' element={<TopRated />} />
					<Route path='/movies/search' element={searchValue === '' ? '' : <Search />}></Route>
					<Route path='movies/search/movie/:id' element={<Movie />}></Route>
					<Route path='movies/upcoming/movie/:id' element={<Movie />}></Route>
					<Route path='movies/popular/movie/:id' element={<Movie />}></Route>
					<Route path='movies/top_rated/movie/:id' element={<Movie />}></Route>
					<Route path='movie/:id' element={<Movie />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
