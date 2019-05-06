import {
  LOGIN,
  LOGIN_OUT,
} from './mutation-types'

export default {
  [LOGIN](state, {name}) {
    state.userInfo = {...state.userInfo,name}
  },
  [LOGIN_OUT](state) {
    state.userInfo = {}
  },
}
