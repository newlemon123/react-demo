/*
able to send async ajax function
pack the axios
function back is promise target

統一request error
 */



import axios from 'axios'
import {message} from 'antd'



export default function ajax(url, data={},type='GET') {

    return new Promise((resolve,reject) =>{

        let promise
        //1. execute ajax request
        if (type ==='GET'){ //send get request
             promise = axios.get(url, {
                params: data //指定參數對象
            })
        }else if (type ==='POST'){  //send post request
             promise = axios.post(url,data
            )
        }else {
             promise= axios.put(url,data
            )
        }
        // 2 . if successful, using resolve(value)
        promise.then(response =>{
            resolve(response.data)
            // 3. if fail, not using reject(reason), show error message
        }).catch(error=>{
            message.error(error.message)
        })


    })
}

//request for login
//ajax('/login', {username:'tom', password:'1234'}, 'POST').then()