/*
able to send async ajax function
pack the axios
function back is promise target
 */
import axios from 'axios'



export default function ajax(url, data={},type='GET') {
    if (type ==='GET'){ //send get request
        return axios.get(url, {
            params: data //指定參數對象


        })


    }else if (type ==='POST'){  //send post request
       return axios.post(url,data
       )
    }else {
        return axios.put(url,data
        )
    }
}

//request for login
//ajax('/login', {username:'tom', password:'1234'}, 'POST').then()