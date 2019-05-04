import axios from 'axios'

export default function (url = '', params = {}, type = 'GET') {
  //判断请求方式
  let promise;
  return new Promise((resolve,reject)=>{
    if(type === 'GET'){
      //拼接字符串
      //?kw=经济&fr=home
      let paramsStr = '';
      let keyArr = Object.keys(params);
      keyArr.forEach((key,index)=>{
        paramsStr += key + '=' + params[key] + '&';
      });
      //过滤掉最后的&
      paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'));
      //完整路径
      url += '?' +paramsStr;
      promise = axios.get(url);
    }else if(type === 'POST'){
      promise = axios.post(url,params);
    }
    promise.then((response)=>{
      resolve(response);
    }).catch((err)=>{
      reject(err);
    })
  });
}
