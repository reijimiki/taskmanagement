import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './../App.css';
import TaskList from './../presentationComponents/task/List';
import DoneTaskList from './../presentationComponents/task/DoneList';
import AddTask from './../presentationComponents/task/Add';
import TaskDetail from './../presentationComponents/task/Detail';
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
            <Route exact path={'/addtask'} render={props => <AddTask {...props} set={value => this.props.actions.setTitle(value)} setPostData={postData => this.props.actions.setPostData(postData)} register={(state) => this.props.actions.register(state)}/>}/>
            <Route exact path={'/taskdetail/:id'} render={props => <TaskDetail taskDetail={this.props.taskDetail} {...props} set={value => this.props.actions.setTitle(value)} getTaskDetail={taskId => this.props.actions.getTaskById(taskId)} update={async (state) => await this.props.actions.update(state)} setDetail={(detail) => this.props.actions.setDetail(detail)}/>}/>
            <Route exact path={'/donetask'} render={props => <DoneTaskList {...props} set={value => this.props.actions.setTitle(value)}/>}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default ContainerComponet;
