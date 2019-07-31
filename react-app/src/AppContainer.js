import ContainerComponet from './containerComponents'
import { connect } from 'react-redux';
import {ActionClass} from './store/actions'

// Connect to Redux
function mapStateToProps(state) {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    title: state.common.headerTitle,
    taskInfo: state.taskInfo,
    taskDetail: state.taskDetail
  };
}
// propsを通してどのようにアクションを呼び出すか決める
const mapDispatchToProps = dispatch => {
  return { actions: new ActionClass(dispatch) };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerComponet);

export default AppContainer
