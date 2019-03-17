import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AddTask extends Component {
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

export default AddTask;