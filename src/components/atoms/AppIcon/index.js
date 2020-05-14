import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

/**
 * Thne next three lines is reqired when we UX export icons as svg
 */
// import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
// import icoMoonConfig from '../../../assets/fonts/icomoon/selection.json';
// const Icomoon = createIconSetFromIcoMoon(icoMoonConfig);

const AppIcon = props => (props.icomoon ? <Icon color={'gray'} {...props} /> : <Icon {...props} />);

AppIcon.propTypes = {
  name: PropTypes.string.isRequired, // icon name
  color: PropTypes.string, // icon color
  size: PropTypes.number, // icon size
  icomoon: PropTypes.bool, // true if you use icomoon
};

const PressedIcon = ({
  onPress,
  containerStyle,
  name,
  size,
  color,
  icomoon,
  disabled,
  ...props
}) => {
  const opacity_style = { opacity: disabled ? 0.5 : 1 };
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[containerStyle, opacity_style]}
      activeOpacity={0.7}>
      <AppIcon {...props} name={name} size={size} color={color} icomoon={icomoon} />
    </TouchableOpacity>
  );
};

PressedIcon.propTypes = {
  name: PropTypes.string.isRequired, // icon name
  color: PropTypes.string, // icon color
  size: PropTypes.number, // icon size
  icomoon: PropTypes.bool, // true if you use icomoon
  onPress: PropTypes.func.isRequired, // function called when on press function
  disabled: PropTypes.bool, // icon disabled
  containerStyle: ViewPropTypes.style, // style for the icon container
};

export { AppIcon, PressedIcon };
