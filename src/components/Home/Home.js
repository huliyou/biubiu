import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { View } from 'isomorphic';
import Title from './Title';
import SliderExmpale from './SliderExmpale';
// import styles from '../../assets/stylesheets/Home/Home.scss';
// import Immutable from 'immutable';
// import * as HomeAction from '../../actions/HomeAction';

class Home extends React.Component {
  // static propTypes = {
  //  dispatch : PropTypes.func,
  // };
  render() {
    return (
      <View>
        <Title />
        <SliderExmpale />
      </View>
   );
  }
}

export default Home;