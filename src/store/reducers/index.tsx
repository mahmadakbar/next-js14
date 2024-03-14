// index.js pada page reducers
import { Reducer, combineReducers } from '@reduxjs/toolkit'
import dataCount from './dataCount'
import dataChart from './dataChart'
import dataWishlist from './dataWishlist'

const rootReducer: Reducer = combineReducers({
  dataCount,
  dataChart,
  dataWishlist,
})
export default rootReducer
