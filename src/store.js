import { createStore, combineReducers, applyMiddleware } from 'redux'
import { quizReducer , scoreReducer } from './reducers/quizReducers'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    quizReducer,
    scoreReducer,
})

const initialState = {}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)
export default store