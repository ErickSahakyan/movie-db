import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './SearchBox.css';


const SearchBox = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector(state => state.value.searchValue);

	const onChangeValue = (searchValue) => {
		dispatch({
			type: 'SEARCH_VALUE',
			payload: {
				searchValue: searchValue,
			},
		});
	};

	return (
		<div className='search__box'>
			<input className='inp'
				placeholder='Type to search...'
				value={searchValue}
				onChange={(e) => (
					onChangeValue(e.target.value)
				)}
			/>
			<Link to='/movies/search' className='search__btn' href='#'>
				<i class="fas fa-search"></i>
			</Link>
		</div>
	);
};

export default SearchBox;