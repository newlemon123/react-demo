// include all api request function
//all request are using promise
import ajax from "./ajax";
import { sha256 } from 'js-sha256';

// const BASE = 'http://18.163.8.204:9690/dh'
// const BASE =''
/*
export function reqLogin(username,password) {
    return ajax('login',{username, password}, 'POST')
}*/

export const reqLogin =(email, password) => ajax(`/user/login?email=${email}&password=${sha256(password)}`,'','PUT')

export const reqAddUser = (user) => ajax('/user/create',user, 'POST')