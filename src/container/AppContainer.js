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

class AppContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 'a',
    }
  }
  // const _clickTabAtIndex = (index: number) => {
  //   switch (index) {
  //     case HomeIndex:
  //       return () => {
  //         // props.dispatch(AppAction.selectHomePage());
  //         props.dispatch(routeActions.push('/app/Home'));
  //       };
  //     case MessageIndex:
  //       return () => {
  //         // props.dispatch(AppAction.selectMessagePage());
  //         props.dispatch(routeActions.push('/app/Message'));
  //       };
  //     case MeIndex:
  //       return () => {
  //         // props.dispatch(AppAction.selectMePage());
  //         props.dispatch(routeActions.push('/app/Me'));
  //       };
  //     default:
  //       return () => console.log('err');
  //   }
  // };

  // handleChange = (value) => {
  //   console.log('value', value);
  //   this.setState({
  //     value: value,
  //   });
  // };
  handleChange(value) {
    console.log('value', value);
    this.setState({
      value: value,
    });
  }
  render() {
    return(
      <View>
        <Tabs
          value={this.state.value}
          initialSelectedIndex={2}
          onChange={(e) => {
            console.log('click: ', e);
          }}

        >
          <Tab
            label="沙龙"
            value="a"
            onClick={() => {
              this.setState({
                value: 'a',
              });
            }}
          >
            <div>hehe</div>
          </Tab>
          <Tab
            label="消息"
            value="b"
            onTouchTap ={(e) => {
              console.log('active: ', e);
            }}
            onClick={() => {
              this.setState({
                value: 'b',
              });
            }}
          >
            <div>sdfsd</div>
          </Tab>
          <Tab
            label="我的"
            value="c"
            onClick={() => {
              this.setState({
                value: 'c',
              });
            }}
          />
        </Tabs>
      </View>
    );
  }
};

AppContainer.propTypes = propTyeps;

const mapStateToProps = (state) => {
  return ({
    dispatch: state.dispatch,
  });
};

export default connect(mapStateToProps)(AppContainer);
