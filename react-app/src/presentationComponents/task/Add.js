import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {DateLogic} from '../../logic/dateLogic'
import {Validate} from '../../logic/validation'
// import { makeStyles } from '@material-ui/core/styles';
import {CONST} from '../../assets/const'
import './../../task/task.css';
// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   }
// }))

var errorMessage = '';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: {},
      taskName:'',
      periodeDateYear: '',
      periodeDateMonth: '',
      periodeDateDay: '',
      genre: '',
      priority: '',
      memo: ''
    }
  }
  componentDidMount () {
    this.props.set('新規タスク追加');
    const date = DateLogic.getToday();
    this.setState({
      periodeDateYear: date.year,
      periodeDateMonth: date.month,
      periodeDateDay: date.day
    });
  }

  handleRegisterTask = () => {
    this.setState({errorMsg: []});
    console.log('this.state [' + JSON.stringify(this.state) + ']');
    this.props.setPostData(this.state);
    let errors = [];
    errors = Validate.reigster(this.state);
    if (errors.length !== 0) {
      console.log('バリデーションエラーのため登録しません')
      console.log(errors)
      errorMessage = '';
      this.buildErrorMessage(errors)
      console.log('errorMessage:' + errorMessage)
      // let messages = [];
      // for(let i = 0; i<errors.length; i++) {
      //   messages.push(errors[i].message);
      // }
      this.setState({errorMsg: errors});
      // console.log(JSON.stringify(this.state))
      // alert(() => {
      //   for(let i; i<errors.length; i++) {
      //     return errors[i].message
      //   }
      // })
      return
    }
    this.setState({errorMsg: errors});
    console.log('登録処理開始')
    this.props.register(this.state);
    // this.props.history.push('/')
  }
  handleToTaskList = () => {
    this.props.history.push('/')
  }
  handleChangeState = key => event => {
    this.setState({[key]: event.target.value});
  }

  buildErrorMessage = (errors) => {
    errorMessage = errors.reduce((accumulator, errorInfo) => {
      accumulator = accumulator + errorInfo.message + '/'
      return accumulator
    }, '')
  }

  render() {
    // const classes = useStyles();
    let dateYear = CONST.DATE.YEAR.map((year, index) => 
      <MenuItem value={year} key={index}>
        <em>{year}</em>
      </MenuItem>
    );
    let dateMonth = CONST.DATE.MONTH.map((month, index) => 
      <MenuItem value={month} key={index}>
        <em>{month}</em>
      </MenuItem>
    );
    let dateDay = CONST.DATE.DAY.map((day, index) => 
      <MenuItem value={day} key={index}>
        <em>{day}</em>
      </MenuItem>
    );
    let genre = CONST.GENRE.map((genre, index) => 
      <MenuItem value={genre.value} key={index}>
        <em>{genre.label}</em>
      </MenuItem>
    );
    let priority = CONST.PRIORITY.map((priority, index) => 
      <MenuItem value={priority.value} key={index}>
        <em>{priority.label}</em>
      </MenuItem>
    );
    
    return (
      <div className="add-task-main">
        <table className="add-task-table">
          <tbody>
            <tr>
              <td><div className="error-message">{errorMessage === '' ? '': errorMessage}</div></td>
            </tr>
            <tr>
              <td><TextField required label="タスク名" value={this.state.taskName} onChange={this.handleChangeState('taskName')}></TextField></td>
            </tr>
            <tr>
              <td>
                <FormControl>
                  <InputLabel>期限</InputLabel>
                  <Select value={this.state.periodeDateYear} onChange={this.handleChangeState('periodeDateYear')}>
                    {dateYear}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel>月</InputLabel>
                  <Select value={this.state.periodeDateMonth} onChange={this.handleChangeState('periodeDateMonth')}>
                    {dateMonth}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel>日</InputLabel>
                  <Select value={this.state.periodeDateDay} onChange={this.handleChangeState('periodeDateDay')}>
                    {dateDay}
                  </Select>
                </FormControl>
              </td>
            </tr>
            <tr>
              <td>
              <FormControl className="add-task-td-genre">
                <InputLabel>ジャンル</InputLabel>
                <Select value={this.state.genre} onChange={this.handleChangeState('genre')}>
                  {genre}
                </Select>
              </FormControl>
              </td>
            </tr>
            <tr>
              <td>
              <FormControl className="add-task-td-priority">
                <InputLabel>優先度</InputLabel>
                <Select value={this.state.priority} onChange={this.handleChangeState('priority')}>
                  {priority}
                </Select>
              </FormControl>
              </td>
            </tr>
            <tr>
              <td><TextField label="メモ" multiline className="task-memo-field" rowsMax="10" value={this.state.memo} onChange={this.handleChangeState('memo')}></TextField></td>
            </tr>
          </tbody>
        </table>
        <Button variant="contained" color="primary" onClick={this.handleRegisterTask}>
          登録
        </Button>
        <Button variant="contained" color="primary" onClick={this.handleToTaskList}>
          一覧へ戻る
        </Button>
      </div>
    );
  }
}

export default withRouter(AddTask);
