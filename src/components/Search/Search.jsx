import { useSelector } from "react-redux";

import Card from "../card/Card";

import { SearchMovie } from './../../API/SearchMovie';



const Search = () => {
	const searchValue = useSelector(state => state.value.searchValue);
	const { searchMovie } = SearchMovie(searchValue);

	return (
		<div className="movie__list">
			<h2 className="list__title">SEARCH</h2>
			<div className="list__cards">
				{
					searchMovie && searchMovie.map(movie => (
						<Card movie={movie} />
					))
				}
			</div>
		</div>
	);
};

export default Search;