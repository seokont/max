import {getApiAdmin} from "../api/api";
import {AxiosInstance as instance} from "axios";
import {applyMiddleware} from 'redux'
import {reduxSagaMiddleware} from 'redux-saga-middleware';

import {takeEvery, put, call} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";


const TOKEN_ADMIN = "TOKEN_ADMIN";
const STATUS_ADMIN_ERROR = "STATUS_ADMIN_ERROR";
const LOGIN_PASSWORD = "LOGIN_PASSWORD";
const LOGIN_ERROR = "LOGIN_ERROR";

let inicil = {
    token: '',
    error: '',

}

let authReducerAdmin = (state = inicil, action) => {


    switch (action.type) {
        case TOKEN_ADMIN:
            return {
                ...state,
                token: action.data.token,

            }

        case STATUS_ADMIN_ERROR:
            return {
                ...state,
                error: action.error
            }

        case LOGIN_PASSWORD:
            return {
                ...state,
                login: action.login,
                password: action.password,

            }

        default:
            return state;

    }
}


// export let authStatusAdmin = (token) => ({type: TOKEN_ADMIN, token: token});


export let getFormData = (formData) => ({type: LOGIN_PASSWORD, formData});


export function* watcherSagaMiddleware() {
    yield takeEvery(LOGIN_PASSWORD, wokerSagaMiddleware)
}

function* wokerSagaMiddleware(formData) {
    try {
        const data = yield call(takeMyApi, formData)

        if(data!=null){yield put({type: TOKEN_ADMIN, data})}


    } catch (error) {
        yield put({type: LOGIN_ERROR, error})
    }

}

function takeMyApi(formData) {
    return getApiAdmin.adminAuthForSite(formData.formData.login, formData.formData.password)
        .then(response => response.data)
}

// export const authAdminThunkCreator = (formData) => (dispatch) => {
//     getApiAdmin.adminAuthForSite(formData)
//         .then(response => {
//             if (response.data) {
//
//                 dispatch(authStatusAdmin(response.data.token))
//             }else  dispatch(authStatusAdminError(response.data.error.message))
//
//         })
// }


export default authReducerAdmin;