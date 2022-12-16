import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';


import { GetPopular } from '../../API/GetPopular';

import './Home.css';

const Home = () => {
	const { popularMovies } = GetPopular();
	return (
		<div className='home__page'>
			<Carousel
				showThumbs={false}
				autoPlay={true}
				transitionTime={3}
				infiniteLoop={true}
				showStatus={false}
			>
				{popularMovies.map(movie => (
					<Link key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
						<div className="posterImage">
							<img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
						</div>
						<div className="posterImage__overlay">
							<div className="posterImage__title">{movie ? movie.original_title : ""}</div>
							<div className="posterImage__runtime">
								{movie ? movie.release_date : ""}
								<span className="posterImage__rating">
									{movie ? movie.vote_average : ""}
									<i className="fas fa-star" />{" "}
								</span>
							</div>
							<div className="posterImage__description">{movie ? movie.overview : ""}</div>
						</div>
					</Link>
				))}
			</Carousel>

		</div>
	);
};

export default Home;