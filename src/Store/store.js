import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import Shopreducer from "../Reducer/shop-reducer";


let reducers = combineReducers({
reducerFromShopReducer:Shopreducer

    }
)

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;
export default store;
