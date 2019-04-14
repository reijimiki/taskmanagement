import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class DoneTaskList extends Component {
  componentDidMount () {
    this.props.set('完了タスク一覧')
  }

  handleToAboutPage = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="done-task-list-main">
        Doneタスク画面
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
