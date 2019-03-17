import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import TaskList from './task/TaskList'
import DoneTaskList from './task/DoneTaskList'
import Header from './common/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'タスク一覧'  
    }
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path={'/'} component={TaskList}/>
            <Route path={'/donetask'} component={DoneTaskList}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
