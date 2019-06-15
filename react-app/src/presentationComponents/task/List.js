import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import CardList from './../listCard.js'
import './../../task/task.css';

class TaskList extends Component {
  componentDidMount () {
    this.props.set('タスク一覧');
    this.props.fetch();
  }
  handleToAboutPage = () => {
    this.props.history.push('/donetask')
  }
  // scriptはこんな感じで追加できる
  handleToThisPage = () => {
    this.props.history.push('/donetask')
  }

  render() {
    return (
      <div className="task-list-main">
        タスク管理アプリのメイン画面
        <div className="task--list__items">
          <CardList list={this.props.taskInfo}/>
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={this.handleToAboutPage}>
            タスク追加
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(TaskList)
