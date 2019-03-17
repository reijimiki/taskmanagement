import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import './task.css';

class TaskList extends Component {
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
        <div className="task--list__item">
          <Card onClick={this.handleToThisPage}>
            <CardContent>テストテキスト</CardContent>
          </Card>
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
