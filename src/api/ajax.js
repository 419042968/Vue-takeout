/*
*   ajax请求函数模块：Vue中使用axios，返回值：promise对象(response)，要求异步返回的数据response.data，而不是response。
* */
import axios from 'axios'
export default function ajax (url, data={}, type='GET') { // 参数data是query参数，如果是param参数，会连在url后面。
  return new Promise(function (resolve, reject) {
    // ajax函数返回promise，定义变量promise来接收
    let promise
    // GET请求：拼接参数data(是对象)到url后面，再发送请求。
    if(type === "GET"){
      // 把参数data拼接为query查询字符串
      let dataStr = ''  // 用来接收拼接字符串query
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&' // 把参数对象data拼接成字符串
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.length - 1) // substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // GET请求：拼接参数data(是对象)到url后面，再发送请求。
      promise = axios.get(url)
    }else{ // POST请求，直接发送请求。
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data) // 成功调用resolve，返回response.data
    }).catch(error => {
      reject(error) // 失败调用reject
    })
  })
}

// 默写一遍
/*import axios from "axios";
export default function ajax(url, data={}, type="GET"){
  return new Promise((resolve, reject) => {
    let promise;
    if(type === 'GET'){
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.length -1)
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    }else{
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}*/

