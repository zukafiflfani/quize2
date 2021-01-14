import {createStore} from 'redux'
import {productReducer} from './products/rduser/cakeReducer'

const store = createStore(productReducer)

export default store