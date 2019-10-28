import axios from 'axios'

// 初期state変数（initialState）の作成
const initialTaskState = {
  taskList: [],
  doneTaskList: []
}

const SET_TASK_LIST = 'setTaskList'
const SET_DONE_TASK_LIST = 'setDoneTaskList'

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

export function taskInfoStateReducer(state = initialTaskState, action) {
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

/* middleware実装 */
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

export const fetchDoneTaskList = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:8080/api/donetask/get`).then(results => {
      console.log('results[' + JSON.stringify(results) + ']');
      dispatch(setDoneTaskList(results.data))
    }).catch(err => {
      console.error('error[' + err + ']')
      // エラーの場合は空配列を設定
      dispatch(setDoneTaskList([]))
    });
  }
}
