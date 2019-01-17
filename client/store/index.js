import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import studentsReducer from '../reducers/student-sub-reducer'
import campusReducer from '../reducers/campus-sub-reducer'
import singleCampusReducer from '../reducers/single-campus-reducer'
import singleStudentReducer from '../reducers/single-student-reducer'

const reducer = combineReducers({
  user,
  students: studentsReducer,
  campuses: campusReducer,
  campus: singleCampusReducer,
  student: singleStudentReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
