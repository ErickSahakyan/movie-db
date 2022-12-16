import { useEffect, useState } from 'react';

const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=b09199f1ba5fbad2896bdce6b5e65aaf&language=en-US`;

export const GetGenresList = () => {
	const [genresList, setGenresList] = useState([]);

	useEffect(() => {
		fetch(GENRES_URL)
			.then((res) => res.json())
			.then(data => setGenresList(data.genres));
	}, []);

	return { genresList };
};