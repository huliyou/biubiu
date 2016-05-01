import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import { View } from 'isomorphic';
import FontIcon from 'material-ui/lib/font-icon';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';


import { routeActions } from 'react-router-redux';

const propTyeps = {
  // children: PropTypes.node.isRequired,
  // tab: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const HomeIndex = 0;
const MessageIndex = 1;
const MeIndex = 2;

const AppContainer = (props) => {
  const _clickTabAtIndex = (index: number) => {
    switch (index) {
      case HomeIndex:
        return () => {
          // props.dispatch(AppAction.selectHomePage());
          props.dispatch(routeActions.push('/app/Home'));
        };
      case MessageIndex:
        return () => {
          // props.dispatch(AppAction.selectMessagePage());
          props.dispatch(routeActions.push('/app/Message'));
        };
      case MeIndex:
        return () => {
          // props.dispatch(AppAction.selectMePage());
          props.dispatch(routeActions.push('/app/Me'));
        };
      default:
        return () => console.log('err');
    }
  };

  return (
    <View>
      <Tabs>
        <Tab label = "沙龙" />
        <Tab label = "消息" />
        <Tab label = "我的" />
      </Tabs>
    </View>
  );
};

AppContainer.propTypes = propTyeps;

const mapStateToProps = (state) => {
  return ({
    dispatch: state.dispatch,
  });
};

export default connect(mapStateToProps)(AppContainer);
