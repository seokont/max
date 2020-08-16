import {applyMiddleware, combineReducers, createStore} from "redux";
import MenuReducer from "./menu-reducer";
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import AboutReducer from "./about-reducer";
import authReducerAdmin, {watcherSagaMiddleware} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'

let sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
        Menumodal: MenuReducer,
        AboutState: AboutReducer,
        AuthAdmin: authReducerAdmin,
        form: formReducer,
    }
)

let store = createStore(reducers, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(watcherSagaMiddleware);
window.store = store;
export default store;
