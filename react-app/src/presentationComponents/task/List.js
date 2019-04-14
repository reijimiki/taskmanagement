import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import './../../task/task.css';

class TaskList extends Component {
  componentDidMount () {
    this.props.set('タスク一覧');
  }
  handleToAboutPage = () => {
    this.props.history.push('/donetask')
  }
  // scriptはこんな感じで追加できる
  handleToThisPage = () => {
    this.props.history.push('/donetask')
  }

  render() {
    const items = this.props.taskInfo.taskList.map((task, index) =>
      <div class="task--list__item">
      <Card onClick={this.handleToThisPage} key={index}>
        <CardContent>
          <div>タスク名：{task.taskName}</div>
          <div>ジャンル：{task.genre}</div>
          <div>優先度：{task.priority}</div>
          <div>期限：{task.period_date}</div>
        </CardContent>
      </Card>
      </div>
    );
    // for (let i=0; i<this.props.taskInfo.length; i++) {
    //   items.push(<Card onClick={this.handleToThisPage}>
    //     <CardContent>this.props.taskInfo[i].taskName</CardContent>
    //   </Card>)
    // }
    return (
      <div className="task-list-main">
        タスク管理アプリのメイン画面
        <div className="task--list__items">
          {items}
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
