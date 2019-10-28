import axios from 'axios'

const SET_INPUT_DATA = 'setInputData'
const GET_STATE = 'getState'

const initialState = {
  taskName: '',
  periodeDateYear: '',
  periodeDateMonth: '',
  periodeDateDay: '',
  genre: '',
  priority: '',
  memo: ''
}

export function setInputData(inputData) {
  return {
    type: SET_INPUT_DATA,
    inputData: inputData
  }
}

export function addTaskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INPUT_DATA:
      return action.inputData
    case GET_STATE:
      console.log(state);
      return state
    default:
      return state
  }
}
export function getState () {
  return {
    type: GET_STATE
  }
}

export const registerTask = (state) => {
  return dispatch => {
    const postData = dispatch(getState())
    console.log('registerTask呼び出し')
    console.log(postData)
    console.log(state)
    return axios.post('http://localhost:8080/api/task/post', state).then(results => {
      console.log('results[' + JSON.stringify(results) + ']');
      return true
    }).catch(err => {
      console.error('error[' + err + ']')
      return false
    })
  }
}
