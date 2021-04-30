import { combineReducers } from 'redux'
import auth from './auth'
import film from '.'
import recipe from '.'
import tvdinner from '.'

export default combineReducers ({
  auth,
  film,
  recipe,
  tvdinner
})