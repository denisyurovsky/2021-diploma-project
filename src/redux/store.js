import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import menuReducer from "./menuReducer";

let store = createStore(combineReducers({menuReducer}, applyMiddleware(thunk)))
export default store;