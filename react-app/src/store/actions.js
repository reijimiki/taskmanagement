import { setHeaderTitle, fetchTaskList } from './index.js'

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
}