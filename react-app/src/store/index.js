import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

/* Actionの実装 */

const SET_TASK_LIST = 'setTaskList'
const GET_TASK_LIST = 'getTaskList'
const SET_DONE_TASK_LIST = 'setDoneTaskList'

const initialTaskState = {
  taskList: [],
  doneTaskList: []
}

export function setTaskList(taskList) {
  return {
    type: SET_TASK_LIST,
    taskList: taskList
  }
}

export function setDoneTaskList(doneTaskList) {
  return {
    type: SET_DONE_TASK_LIST,
    doneTaskList: doneTaskList
  }
}

export function getTaskList() {
  return {
    type: GET_TASK_LIST
  }
}

// Action名の定義
// const SEND = 'SEND';

// Action Creator
// function send(value) {
  // Action
//   return {
//     type: SEND,
//     value,
//   };
// }

// function formReducer(state, action) {
//   switch (action.type) {
//     case SEND:
//       return Object.assign({}, state, {
//         value: action.value
//       });
//       default: {
//         return state;
//       }
//   }
// }

export function setHeaderTitle(title) {
  // console.log('store の setHeaderTitle');
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
function taskInfoStateReducer(state = initialTaskState, action) {
  // console.log('taskInfoState');
  // console.log('state[' + JSON.stringify(state) + ']');
  // console.log('actionType[' + action.type + ']');
  switch (action.type) {
    case SET_TASK_LIST:
      return {
        taskList: action.taskList,
        doneTaskList: state.doneTaskList
      }
    case SET_DONE_TASK_LIST:
        return {
          taskList: state.taskList,
          doneTaskList: action.doneTaskList
        }
    default:
      return state
  }
}

const reducers = combineReducers({
  common: commonStateReducer,
  taskInfo: taskInfoStateReducer
});

// middleware実装
export const fetchTaskList = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:8080/api/task/get`).then(results => {
      console.log('results[' + JSON.stringify(results) + ']');
      dispatch(setTaskList(results.data))
    }).catch(err => {
      console.error('error[' + err + ']')
      // エラーの場合は空配列を設定
      dispatch(setTaskList([]))
    });
  }
}

/* Storeの実装 */

// 初期state変数（initialState）の作成
// const initialState = {
//   headerTitle: 'aaaa'
// };
// createStore（）メソッドを使ってStoreの作成
export const store = createStore(reducers, applyMiddleware(thunk));