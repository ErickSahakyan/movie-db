import { useState, useEffect } from "react";


;

export const SearchMovie = (searchValue) => {
	const [searchMovie, setSearchMovie] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=b09199f1ba5fbad2896bdce6b5e65aaf&language=en-US&query=${searchValue}`)
			.then((res) => res.json())
			.then(data => setSearchMovie(data.results));
	}, [searchValue]);

	return { searchMovie };
};

