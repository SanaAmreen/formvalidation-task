import { combineReducers,createStore } from "redux";
import {PersonalDetailsReducer} from "./Reducers"


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        PersonalDetailsReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}