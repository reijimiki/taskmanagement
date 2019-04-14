import { createStore } from 'redux'

const SET_TASK_LIST = 'setTaskList'
const SET_DONE_TASK_LIST = 'seTdoneTaskList'

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

function taskInfoState(state, action) {
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

/* Storeの実装 */

// 初期state変数（initialState）の作成
const initialState = {
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
};
// createStore（）メソッドを使ってStoreの作成
export const store = createStore(commonState, initialState);