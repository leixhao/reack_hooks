/*
 * @Description: 
 * @Version: 
 * @Autor: LeiHao
 * @Date: 2020-09-10 14:04:19
 * @LastEditors: LeiHao
 * @LastEditTime: 2020-09-11 18:16:55
 */
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:80'
export const Ajax = (url, data = {}, type) => {
  return new Promise((resolve,reject) => {
    let Promise
    if(type == 'get'){
      Promise = axios.get(url, {
        params: data
      })
    }else if(type == 'post'){
      Promise = axios.get(url, {
        params: data
      })
    }else if(type == 'patch'){
      Promise = axios.patch(url, {
        params: data
      })
    }
    Promise.then(response => {
      resolve(response)
    }).catch(error => {
      console.log(error)
    })
  })
}