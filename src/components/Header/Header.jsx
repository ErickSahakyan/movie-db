import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from './../SearchBox/SearchBox';
import './Header.css';

const Header = () => {

	return (
		<div className='header'>
			<Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '2.5rem' }}>ESAFilms</Link>
			<Link to="/movies/popular" style={{ textDecoration: 'none', color: 'white' }}>
				<span>Popular</span>
			</Link>
			<Link to="/movies/upcoming" style={{ textDecoration: 'none', color: 'white' }}>
				<span>Upcoming</span>
			</Link>
			<Link to="/movies/top_rated" style={{ textDecoration: 'none', color: 'white' }}>
				<span>Top Rated</span>
			</Link>
			<Link to="/movies/favorite" style={{ textDecoration: 'none', color: 'white' }}>
				<span>Favorite</span>
			</Link>
			<SearchBox />
		</div>
	);
};

export default Header;