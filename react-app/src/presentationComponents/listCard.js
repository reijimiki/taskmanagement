import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {DateLogic} from '../logic/dateLogic';

class TaskItems extends Component {
  handleToThisPage = (taskId) => {
    this.props.history.push('/taskdetail/' + taskId);
  }
  render() {
    if (!this.props.list) {
      return (<div>未完了のタスクがありません。</div>)
    }
    let items = this.props.list.map((task, index) =>
        <div className="task--list__item" key={index}>
        <Card onClick={() => this.handleToThisPage(task.taskId)}>
          <CardContent>
            <div>タスク名：{task.taskName}</div>
            <div>ジャンル：{task.genre}</div>
            <div>優先度：{task.priority}</div>
            <div>期限：{DateLogic.formatDate(task.periodDate)}</div>
          </CardContent>
        </Card>
        </div>
      );
    return (
      <div>{items}</div>
    );
  }
}

export default withRouter(TaskItems);