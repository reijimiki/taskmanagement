import axios from 'axios'
import {DateLogic} from '../logic/dateLogic'
const SET_TASK_DETAIL = 'setTaskDetail'

const initialState = {
  taskId: '',
  taskState: '',
  taskName:'',
  periodeDateYear: '',
  periodeDateMonth: '',
  periodeDateDay: '',
  genre: '',
  priority: '',
  memo: ''
}

export function setTaskDetail(taskDetail) {
  return {
    type: SET_TASK_DETAIL,
    taskDetail: taskDetail
  }
}

export function taskDetailReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK_DETAIL:
      return action.taskDetail
    default:
      return state
  }
}


export const getTaskDetailById = (taskId) => {
  return dispatch => {
    return axios.get('http://localhost:8080/api/taskinfo/get?taskid=' + taskId).then(results => {
      const splitDate = DateLogic.splitPeriodDate(results.data.periodeDate);
      const detail = {
        taskId: results.data.taskId,
        taskState: results.data.taskState,
        taskName: results.data.taskName,
        periodeDateYear: splitDate.year,
        periodeDateMonth: splitDate.month,
        periodeDateDay: splitDate.day,
        genre: results.data.genre,
        priority: results.data.priority,
        memo: results.data.memo
      }
      dispatch(setTaskDetail(detail));
    }).catch(err => {
      console.error('error[' + err + ']');
    })
  }
}

export const updateDetailById = (state) => {
  return () => {
    console.log(state);
    return axios.put('http://localhost:8080/api/task/put', state).then(results => {
      return true
    }).catch(err => {
      console.error('error[' + err + ']');
      return false
    })
  }
}
