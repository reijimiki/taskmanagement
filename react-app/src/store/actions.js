import { setHeaderTitle, fetchTaskList } from './index.js'
import { setInputData, registerTask } from './addTask'

export class ActionClass {
  dispatch: (action: any) => any;
  
  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  fetchTask(): Promise<void> {
    this.dispatch(fetchTaskList());
  };
  
  setTitle(value) {
    this.dispatch(setHeaderTitle(value));
  };

  setPostData(inputData) {
    this.dispatch(setInputData(inputData));
  };

  register(state): Promise<void> {
    this.dispatch(registerTask(state));
  }
}