/**
 * Created by Administrator on 2018-01-29.
 */
import axios from 'axios'
export function http (paramUrl, paramData, paramMethod) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      method: paramMethod || 'GET',
      baseURL: 'http://192.168.1.102:8000/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 669622790151990de0e4199fd32e17dc5e633aad'
      },
      timeout: 5 * 1000,
      url: paramUrl,
      data: paramData
    })
    instance.interceptors.request.use(function (config) {
      console.log(paramData, paramMethod, paramUrl)
      return config
    })
    instance()
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        console.dir(error)
        reject(error)
      })
  })
}
