import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CardList from './../listCard.js';

class DoneTaskList extends Component {
  componentDidMount () {
    this.props.set('完了タスク一覧');
    this.props.fetch();
  }

  handleToAboutPage = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="done-task-list-main">
        <div className="task--list__items">
          <CardList list={this.props.taskInfo.doneTaskList}/>
        </div>
        <div>
          <Button variant="contained" color="secondary" onClick={this.handleToAboutPage}>
            タスク一覧画面へ遷移する
          </Button>
        </div>
      </div>
    );
  }
}

export default DoneTaskList;
