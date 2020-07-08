// include all api request function
//all request are using promise
import ajax from "./ajax";
// const BASE = 'http://18.163.8.204:9690/dh'
const BASE =''
/*
export function reqLogin(username,password) {
    return ajax('login',{username, password}, 'POST')
}*/

export const reqLogin =(email, password) => ajax(BASE +'/user/login',{email, password}, 'PUT')

export const reqAddUser = (user) => ajax('/user/create',user, 'POST')