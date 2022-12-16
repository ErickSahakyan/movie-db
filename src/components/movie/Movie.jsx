import React, { useEffect, useState } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
	const [currentMovieDetail, setMovie] = useState();
	const { id } = useParams();

	useEffect(() => {
		getData();
		window.scrollTo(0, 0);
	}, []);

	const getData = () => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
			.then(res => res.json())
			.then(data => setMovie(data));
	};

	return (
		<div className="movie">
			<div className="movie__intro">
				<img className="movie__backdrop" alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
			</div>
			<div className="movie__detail">
				<div className="movie__detail-left">
					<div className="movie__poster-box">?
						<img className="movie__poster" alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
					</div>
				</div>
				<div className="movie__detail-right">
					<div className="movie__detail-right-top">
						<div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
						<div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
						<div className="movie__rating">
							{currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" />
							<span className="movie__vote-count">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
						</div>
						<div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
						<div className="movie__release-date">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
						<div className="movie__genres">
							{
								currentMovieDetail && currentMovieDetail.genres
									?
									currentMovieDetail.genres.map(genre => (
										<><span className="movie__genre" id={genre.id}>{genre.name}</span></>
									))
									:
									""
							}
						</div>
					</div>
					<div className="movie__detail-right-bottom">
						<div className="synopsis-text">Synopsis</div>
						<div>{currentMovieDetail ? currentMovieDetail.overview : "Not synopsis"}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movie;