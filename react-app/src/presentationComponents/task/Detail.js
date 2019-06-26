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
import {CONST} from '../../assets/const'
import './../../task/task.css';

var errors = [];

class TaskDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.set('タスク詳細');
    const date = DateLogic.getToday();
    this.setState({
      periodeDateYear: date.year,
      periodeDateMonth: date.month,
      periodeDateDay: date.day
    });
  }

  handleRegisterTask = () => {
    console.log('this.state [' + JSON.stringify(this.state) + ']');
    this.props.setPostData(this.state);
    errors = [];
    errors = Validate.reigster(this.state);
    if (errors.length !== 0) {
      console.log('バリデーションエラーのため登録しません')
      console.log(errors);
      alert(errors);
      return
    }
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
              <td><TextField label="メモ" multiline rowsMax="4" value={this.state.memo} onChange={this.handleChangeState('memo')}></TextField></td>
            </tr>
          </tbody>
        </table>
        <Button variant="contained" color="primary" onClick={this.handleRegisterTask}>
          更新
        </Button>
        <Button variant="contained" color="primary" onClick={this.handleRegisterTask}>
          完了
        </Button>
        <Button variant="contained" color="primary" onClick={this.handleToTaskList}>
          一覧へ戻る
        </Button>
      </div>
    );
  }
}

export default withRouter(TaskDetail);
