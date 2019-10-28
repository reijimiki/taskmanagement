import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {taskInfoStateReducer} from './taskInfo'
import {addTaskReducer} from './addTask'
import {taskDetailReducer} from './taskDetail'

/* Actionの実装 */
export function setHeaderTitle(title) {
  return {
    type: 'title',
    headerTitle: title
  }
}

function commonStateReducer(state = {headerTitle: ''}, action) {
  switch (action.type) {
    case 'title':
      return {headerTitle: action.headerTitle}
    default:
      return state
  }
}

const reducers = combineReducers({
  common: commonStateReducer,
  taskInfo: taskInfoStateReducer,
  addTask: addTaskReducer,
  taskDetail: taskDetailReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));