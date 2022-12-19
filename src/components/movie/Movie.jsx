import React, { useEffect, useState } from "react";
import "./Movie.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";

const Movie = () => {
	const [currentMovieDetail, setMovie] = useState();
	const { id } = useParams();

	useEffect(() => {
		getData();
		window.scrollTo(0, 0);
	});

	const getData = () => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
			.then(res => res.json())
			.then(data => setMovie(data));
	};

	const dispatch = useDispatch();

	const addFavoriteMovies = (currentMovieDetail) => {
		dispatch({
			type: 'ADD_FAVORITE',
			payload: currentMovieDetail,
		});
	};

	const removeFavoriteMovie = (currentMovieDetail) => {
		dispatch({
			type: 'REMOVE_FAVORITE',
			payload: currentMovieDetail,
		});
	};

	return (
		<div className="movie">
			<div className="movie__intro">
				<img className="movie__backdrop" alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
			</div>
			<div className="movie__detail">
				<div className="movie__detail-left">
					<div className="movie__poster-box">
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
						<p className="synopsis-text">Synopsis</p>
						<div>{currentMovieDetail ? currentMovieDetail.overview : "Not synopsis"}</div>
					</div>
					<div>
						
					</div>
					<div className="btn__box">
						<Link to='/'><button className="btn__back">Back</button></Link>
						<button onClick={() => {
							addFavoriteMovies(currentMovieDetail);
							alert('This movie has been added');
						}} className="btn__favorite">Add Favorite</button>
						<button onClick={() => {
							removeFavoriteMovie(currentMovieDetail);
							alert('This movie has been deleted');
						}} className="btn__remove">Remove Film</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movie;