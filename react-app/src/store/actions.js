import { setHeaderTitle } from './index.js'
import { fetchTaskList, fetchDoneTaskList } from './taskInfo'
import { setInputData, registerTask } from './addTask'
import { getTaskDetailById, updateDetailById, setTaskDetail } from './taskDetail'

export class ActionClass {
  dispatch: (action: any) => any;
  
  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  fetchTask(): Promise<void> {
    this.dispatch(fetchTaskList());
  };

  fetchDoneTask(): Promise<void> {
    this.dispatch(fetchDoneTaskList());
  };

  setTitle(value) {
    this.dispatch(setHeaderTitle(value));
  };

  setPostData(inputData) {
    this.dispatch(setInputData(inputData));
  };

  register(state): Promise<void> {
    this.dispatch(registerTask(state));
  };

  // TaskDetail
  setDetail(detail) {
    this.dispatch(setTaskDetail(detail));
  };
  async getTaskById(taskId): Promise<void> {
    await this.dispatch(getTaskDetailById(taskId));
  };
  update(state): Promise<void> {
    this.dispatch(updateDetailById(state));
  };
}