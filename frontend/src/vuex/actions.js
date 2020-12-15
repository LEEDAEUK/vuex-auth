import {UID, IS_AUTH, ERROR_STATE, ID} from './mutation_types'
import api from '../api/methods'

let setUID = ({commit}, data) => {
  commit(UID, data)
}

let setErrorState = ({commit}, data) => {
  commit(ERROR_STATE, data)
}

let setIsAuth = ({commit}, data) => {
  commit(IS_AUTH, data)
}

let setID = ({commit}, data) => {
  commit(ID, data)
}

let processResponse = (store, loginResponse) => {
  switch (loginResponse) {
    case 'not exist':
      setErrorState(store, 'Wrong ID or Password')
      setIsAuth(store, false)
      break
    case 'password incorrect':
      setErrorState(store, 'password incorrect')
      setIsAuth(store, false)
      break
    case 'unknown error':
      setErrorState(store, 'unknown error')
      setIsAuth(store, false)
      break
    default:
      setID(store, loginResponse.data.message[0].id)
      setUID(store, loginResponse.data.message[0].user_code)
      setErrorState(store, '')
      setIsAuth(store, true)
  }
}

let logoutProcessResponse = (store) => {
  setID(store, '')
  setUID(store, '')
  setErrorState(store, '')
  setIsAuth(store, false)
}

export default {
  async login (store, {uid, password}) {
    let loginResponse = await api.loginCheck(uid, password)
    processResponse(store, loginResponse)
    return store.getters.getIsAuth
  },
  async logout (store) {
    logoutProcessResponse(store)
  }


}
