const defaultState = {
	favorite: [],
};


export const addFavoriteReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'ADD_FAVORITE':
		return {...state, favorite: [...state.favorite, action.payload]};
	case 'REMOVE_FAVORITE':
		return {...state, favorite: state.favorite.filter((movie => movie.id !== action.payload.id))};
	default:
		return state;
	}
};
