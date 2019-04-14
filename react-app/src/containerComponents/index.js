import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './../App.css';
import TaskList from './../presentationComponents/task/List'
import DoneTaskList from './../presentationComponents/task/DoneList'
import Header from './../common/Header'

class ContainerComponet extends Component {
  componentDidMount () {
    console.log('ContainerComponet componentDidMount');
    console.log('value[' + JSON.stringify(this.props.title) + ']')
  }
  componentDidUpdate () {
    console.log('ContainerComponet componentDidUpdate');
    console.log('value[' + JSON.stringify(this.props.title) + ']')
  }
  componentWillUnmount () {
    console.log('ContainerComponet componentWillUnmount');
    console.log('value[' + JSON.stringify(this.props.title) + ']')
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Header title={this.props.title}/>
          <Switch>
            <Route exact path={'/'} render={() => <TaskList taskInfo={this.props.taskInfo} set={value => this.props.setTitle(value)}/>} />
            <Route exact path={'/donetask'} render={props => <DoneTaskList {...props} set={value => this.props.setTitle(value)}/>}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

ContainerComponet.propTypes = {
  setTitle: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default ContainerComponet;
