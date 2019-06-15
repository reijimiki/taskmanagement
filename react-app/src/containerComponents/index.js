import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './../App.css';
import TaskList from './../presentationComponents/task/List';
import DoneTaskList from './../presentationComponents/task/DoneList';
import Header from './../common/Header';

class ContainerComponet extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Header title={this.props.title}/>
          <Switch>
            <Route exact path={'/'} render={() => <TaskList taskInfo={this.props.taskInfo} set={value => this.props.actions.setTitle(value)}  fetch={() => this.props.actions.fetchTask()}/>} />
            <Route exact path={'/donetask'} render={props => <DoneTaskList {...props} set={value => this.props.actions.setTitle(value)}/>}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default ContainerComponet;
