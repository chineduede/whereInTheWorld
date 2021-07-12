import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countryReducer from './reducers/countryReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
	countries: countryReducer,
	filter: filterReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store