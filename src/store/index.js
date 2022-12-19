import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { valueReducer } from "./valueReducer";
import { addFavoriteReducer } from "./addFavoriteReducer";

const rootReducer = combineReducers({
	value: valueReducer,
	favorite: addFavoriteReducer,
});


export const store = createStore(rootReducer, composeWithDevTools());