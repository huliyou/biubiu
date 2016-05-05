import React, { PropTypes } from 'react';
import { View } from 'isomorphic';
import styles from '../../assets/Home/Title.scss';

const Title = () => {
  return (
    <View className={styles.TitleContainer}>
      <h1 className={styles.content}>美发沙龙</h1>
    </View>
  );
};


export default Title;
