import {getParametrs} from "../Api/api";

import img1 from './../Assets/img1.svg'
import img2 from './../Assets/img2.svg'
import img3 from './../Assets/img3.svg'
import img4 from './../Assets/img4.svg'


const RESULT_CODE = "RESULT_CODE";
const RESULT_CODE_FALSE = "RESULT_CODE_FALSE";
const PRODUCT_ID = "PRODUCT_ID";



let i = {
    userId: 3,

    itemproduct:[

        {
            id:1, images:img1, title:'«Рождение Венеры» Сандро Боттичелли', priceold:'2 000 000 $', pricenew:'1 000 000 $', disabled:"none"
        },
        {
            id:2, images:img2, title:'«Тайная вечеря» Леонардо да Винчи', priceold:'', pricenew:'3 000 000 $', disabled:"none"
        },
        {
            id:3, images:img3, title:'«Сотворение Адама» Микеланджело', priceold:'6 000 000 $', pricenew:'5 000 000 $', disabled:"none"
        },
        {
            id:4, images:img4, title:"«Урок анатомии» Рембрандт", priceold:'2 000 000 $', pricenew:'1 000 000 $', disabled:"disabled"
        },
    ]



};

let Shopreducer = (state = i, action) => {

    switch (action.type) {
        case RESULT_CODE:
            return {
                ...state,
                userId: action.userId,

            };
        case RESULT_CODE_FALSE:
            return {
                ...state,
                userId: action.userId,

            };




        default:
            return state;
    }


}


export let authResultCode = (userId) => ({type: RESULT_CODE, userId});

export let authResultCodeFalse = (userId) => ({type: RESULT_CODE_FALSE, userId});




export const authThunk = () => {

    return (dispatch) => {

        getParametrs().then((response) => {
            dispatch(authResultCode(response.data.data.id))
            localStorage.setItem('userId', response.data.data.id);

        })


    }
}


export default Shopreducer;