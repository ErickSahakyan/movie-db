import { createStore } from "redux";

import { valueReducer } from "./valueReducer";


export const store = createStore(valueReducer);