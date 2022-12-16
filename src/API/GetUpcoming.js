import { useEffect, useState } from 'react';

export const GetUpcoming = (nextPage) => {
	const [upcomingMovies, setUpcomingMovies] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b09199f1ba5fbad2896bdce6b5e65aaf&language=en-US&page=${nextPage}`)
			.then((res) => res.json())
			.then(data => setUpcomingMovies(data.results));
	}, [nextPage]);

	return { upcomingMovies };
};
