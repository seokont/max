import * as axios from "axios";


export const instance = axios.create({
    baseURL: "http://138.68.124.98:4010/api/v1/website-backend"
})


export const getApiAdmin = {

    adminAuthForSite(login,password) {

       return instance.post(`/adminapi/admin/login`, {login:login,password:password})
    },


}