import { useEffect, useState } from 'react';

export function GetTopRated(nextPage) {
	const [topRatedMovies, setTopRatedMovies] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b09199f1ba5fbad2896bdce6b5e65aaf&language=en-US&page=${nextPage}`)
			.then((res) => res.json())
			.then(data => setTopRatedMovies(data.results));
	}, [nextPage]);

	return { topRatedMovies };
};
