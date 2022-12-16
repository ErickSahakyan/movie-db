import { useEffect, useState } from 'react';

export const GetPopular = (nextPage) => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b09199f1ba5fbad2896bdce6b5e65aaf&language=en-US&page=${nextPage}`)
			.then((res) => res.json())
			.then(data => setPopularMovies(data.results));
	}, [nextPage]);

	return { popularMovies };
};

