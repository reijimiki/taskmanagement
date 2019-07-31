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
  splitPeriodDate (date) {
    try {
      let m = moment(date, "YYYY/MM/DD hh:mm:ss");
      m.add(9, 'h');
      m.format("YYYY年MM月DD日");
      return {
        year: m.year(),
        month: m.month()+1,
        day: m.date()
      };
    } catch (err) {
      console.error(err)
      return {
        year: '',
        month: '',
        day: ''
      };
    }
  },
  formatDate (date) {
    let m = moment(date);
    m.add(9, 'h');
    return m.format("YYYY年MM月DD日");
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