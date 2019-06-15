import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

class TaskItems extends Component {
  async componentDidUpdate () {
  }
  render() {
    if (!this.props.list.taskList) {
      return (<div></div>)
    }
    let items = this.props.list.taskList.map((task, index) =>
        <div className="task--list__item" key={index}>
        <Card onClick={this.handleToThisPage}>
          <CardContent>
            <div>タスク名：{task.taskName}</div>
            <div>ジャンル：{task.genre}</div>
            <div>優先度：{task.priority}</div>
            <div>期限：{task.periodeDate}</div>
          </CardContent>
        </Card>
        </div>
      );
    return (
      <div>{items}</div>
    );
  }
}

export default TaskItems;