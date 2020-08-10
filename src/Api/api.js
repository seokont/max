import * as axios from "axios";


export const getParametrs=()=>{

    return axios.get('https://reqres.in/api/products/3')
}
