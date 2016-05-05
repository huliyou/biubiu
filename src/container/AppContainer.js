import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import { View } from 'isomorphic';
import Home from '../components/Home/Home';
import SwipeableViews from 'react-swipeable-views';

import { routeActions } from 'react-router-redux';


import styles from '../assets/AppContainer.scss';

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
      value: 0,
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
      <View className={styles.AppContainer}>
        <SwipeableViews
          className={styles.content}
          index={this.state.value}
          onChangeIndex={this.handleChange}
        >
          <View>
            <Home/>
          </View>
          <div>234</div>
          <div>456</div>
        </SwipeableViews>
        <Tabs
          value={this.state.value}
          //initialSelectedIndex={2}
          onChange={this.handleChange}
        >
          <Tab
            label="沙龙"
            value={0}
            onClick={() => {
              this.setState({
                value: 0,
              });
            }}
          />
          <Tab
            label="消息"
            value={1}
            onTouchTap ={(e) => {
              console.log('active: ', e);
            }}
            onClick={() => {
              this.setState({
                value: 1,
              });
            }}
          />
          <Tab
            label="我的"
            value={2}
            onClick={() => {
              this.setState({
                value: 2,
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
