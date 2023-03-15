import axios from "axios";
import { ElMessage } from "element-plus";
const BASE_URL = "http://localhost:5000";
function apiAxios(method:string, url:string, params?:any) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: method === "post" || method === "put" ? params : null,
      params: method === "get" || method === "delete" ? params : null,
      headers: {
        //'Content-Type':'application/json'
      },
      baseURL: BASE_URL,
      withCredentials: false,
    })
      .then(function (res) {
        if (res.status) {
          resolve(res.data);
        }
      })
      .catch(function (error) {
        let res = error.response;
        if (error) {
          ElMessage.error('Nerwork Error')
          reject(error)
        }
      });
  });
}
export default ({
    get: function (url:string, params?: any) {
        return apiAxios('get', url, params);
    },
    post: function (url:string, params: any) {
        return apiAxios('post', url, params);
    },
    put: function (url:string, params: any) {
        return apiAxios('put', url, params);
    },
    delete: function (url:string, params: any) {
        return apiAxios('delete', url, params);
    }
})
