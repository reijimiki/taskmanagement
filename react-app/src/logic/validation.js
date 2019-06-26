import {DateLogic} from './dateLogic'

export var Validate = {
  // タスク追加項目バリデーション
   reigster: function (inputData) {
    let errors = [];
    if (!isExistValue(inputData.taskName)) {
      const error = setErrerInfo('taskName', 'タスク名は必須です。');
      errors.push(error);
    };
    if (!isExistDate(inputData.periodeDateYear, inputData.periodeDateMonth, inputData.periodeDateDay)) {  
      const error = setErrerInfo('periodeDate', '無効な日付です。');
      errors.push(error);
    };
    return errors;
  }
}
function setErrerInfo (id, message) {
  return {
    id,
    message
  }
}

function isExistValue (value) {
  if (!value) {
    return false;
  }
  return true;
}

function isExistDate (year, month, day) {
  return DateLogic.isValidDate(year, month, day);
}
