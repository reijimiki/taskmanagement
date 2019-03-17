import { createStore } from 'redux'

/* Actionの実装 */

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

function setHeaderTitle(value) {
  return {
    headerTitle: value
  }
}

function commonState(state, action) {
  return {
    headerTitle: 'aaaa'
  }
}

/* Storeの実装 */

// 初期state変数（initialState）の作成
const initialState = {
  headerTitle: ''
};
// createStore（）メソッドを使ってStoreの作成
export const store = createStore(commonState, initialState);