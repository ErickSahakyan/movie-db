import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/Card';

import './Favorite.css';

const Favorite = () => {
	const favorite = useSelector(state => state.favorite.favorite);
	return (
		<div className='favorite__list'>
			<h2 className='favorite__title'>FAVORITE</h2>
			<div className="list__cards">
				{
					favorite.map(movie => (
						<Card movie={movie} />
					))
				}
			</div>
		</div>
	);
};

export default Favorite;