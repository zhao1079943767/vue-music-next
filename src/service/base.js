import axios from "axios"

const baseURL = process.env.NODE_ENV === 'production' ? 'http://ustbhuangyi.com/music-next/' : '/'
const ERR_OK = 0

axios.defaults.baseURL = baseURL

export function get(url, params) {
  // return new Promise((resolve,reject) => {
  //   axios.get(url, {
  //     params
  //   }).then(res => {
  //     const serverData = res.data
  //     if (serverData.code == ERR_OK) {
  //       resolve(serverData.result)
  //     }else{
  //       console.log(res)
  //     }
  //   }).catch(err => {
  //     reject(err)
  //     console.log(err)
  //   })
  // })
  return axios.get(url, {
    params
  }).then(res => {
    const serverData = res.data
    if (serverData.code == ERR_OK) {
      return serverData.result
    }
  }).catch(err => {
    console.log(err)
  })
}