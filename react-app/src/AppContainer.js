import ContainerComponet from './containerComponents'
import { setHeaderTitle } from './store'
import { connect } from 'react-redux';

// Connect to Redux
function mapStateToProps(state) {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    title: state.common.headerTitle,
    taskInfo: state.taskInfo
  };
}
function mapDispatchToProps(dispatch) { 
  return {
    // propsを通して取得する際に使う名前
    setTitle(value) {
      // Storeのdispatchメソッド（引数はAction Creator）
      dispatch(setHeaderTitle(value));
    }
  };
}



const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerComponet);

export default AppContainer
