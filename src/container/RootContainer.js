import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';


const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
};

class RootContainer extends React.Component {
  componentWillMount() {
    // 判断是否是登录状态
    // 登录状态过期 跳转到登录界面
    // this.props.dispatch(routeActions.push('/Login'));
    // 登录状态有效 跳转到app界面
    this.props.dispatch(routeActions.push('/app'));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

RootContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(RootContainer);
