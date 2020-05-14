import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

let Line = ({ width, height, color, ...rest }) => (
  <View style={styles.line(width, height, color)} {...rest} />
);

Line = React.memo(Line);
export { Line };

Line.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
