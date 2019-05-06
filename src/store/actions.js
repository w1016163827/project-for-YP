import {
  loginRequest
} from '../api'
import {
  LOGIN,
  LOGIN_OUT,
} from './mutation-types'
export default {
  async login({commit},{name,password}) {
    const res = await loginRequest(name,password)
    if(res.status === 200){
      commit(LOGIN,{name})
    }
  },
  loginOut({commit}){
    commit(LOGIN_OUT)
  }
}


