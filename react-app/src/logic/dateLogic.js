import moment from 'moment'

// 日付を返したりフォーマットしたり
export var DateLogic = {
  getToday () {
    const date = {
      year: moment().year(),
      month: moment().month()+1,
      day: moment().date()
    };
    return date
  },
  formatDate (date) {
    const formatedDate = moment(date).format("YYYY年MM月DD日")
    return formatedDate
  },
  isValidDate (year, month, day) {
    if (!year || !month || !day) {
      console.log('形式エラー year[' + year + '] month[' + month + '] day[' + day + ']');
      return false;
    }
    const dateList = [];
    dateList.push(parseInt(year));
    dateList.push(parseInt(month));
    dateList.push(parseInt(day));
    let result = moment(dateList, 'YYYY/MM/DD').isValid();
    return result;
  }
}