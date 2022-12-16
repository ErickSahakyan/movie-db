const defaultState = {
	searchValue: '',
};

export const valueReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'SEARCH_VALUE':
		return { ...state, searchValue: action.payload.searchValue };
	default:
		return state;
	}
};