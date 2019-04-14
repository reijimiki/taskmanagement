import { createStore, combineReducers } from 'redux'

/* Actionの実装 */

const SET_TASK_LIST = 'setTaskList'
const SET_DONE_TASK_LIST = 'seTdoneTaskList'

const initialTaskState = {
  taskList: [{
    taskId: '1',
    taskName: 'テスト用タスク１',
    genre: 'ジャンル１',
    priority: 'high',
    period_date: '2019/4/30'
  },{
    taskId: '2',
    taskName: 'テスト用タスク2',
    genre: 'ジャンル2',
    priority: 'mid',
    period_date: '2019/4/29'
  },{
    taskId: '3',
    taskName: 'テスト用タスク3',
    genre: 'ジャンル3',
    priority: 'low',
    period_date: '2019/5/1'
  }],
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
  return {
    type: 'title',
    headerTitle: title
  }
}

function commonStateReducer(state = {headerTitle: ''}, action) {
  console.log('CommonState');
  console.log('action[' + JSON.stringify(action.headerTitle) + ']');
  console.log('state[' + JSON.stringify(state) + ']');
  switch (action.type) {
    case 'title':
      return {headerTitle: action.headerTitle}
    default:
      return state
  }
}

function taskInfoStateReducer(state = initialTaskState, action) {
  console.log('taskInfoState');
  console.log('action[' + JSON.stringify(action) + ']');
  console.log('state[' + JSON.stringify(state) + ']');
  switch (action.type) {
    case SET_TASK_LIST:
      return {taskList: action.taskList}
    case SET_DONE_TASK_LIST:
        return {doneTaskList: action.doneTaskList}
    default:
      return state
  }
}

const reducers = combineReducers({
  common: commonStateReducer,
  taskInfo: taskInfoStateReducer
});

/* Storeの実装 */

// 初期state変数（initialState）の作成
// const initialState = {
//   headerTitle: 'aaaa'
// };
// createStore（）メソッドを使ってStoreの作成
export const store = createStore(reducers);