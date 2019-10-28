import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import CardList from './../listCard.js';
import './../../task/task.css';

class TaskList extends Component {
  componentDidMount () {
    this.props.set('タスク一覧');
    this.props.fetch();
  }
  handleToAboutPage = () => {
    this.props.history.push('/addtask')
  }
  // scriptはこんな感じで追加できる
  handleToDoneTaskPage = () => {
    this.props.history.push('/donetask')
  }

  render() {
    return (
      <div className="task-list-main">
        <div className="task--list__items">
          <CardList list={this.props.taskInfo.taskList}/>
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
