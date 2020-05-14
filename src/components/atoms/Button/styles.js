import { StyleSheet } from 'react-native';
import { calcFont, calcHeight, calcWidth } from '../../../utils';
import { FONTS, COLORS } from '../../../common';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark,
    height: calcHeight(63.3),
    width: calcWidth(300.3),
    paddingHorizontal: calcWidth(10),
    borderRadius: calcHeight(5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledStyle: {
    opacity: 0.7,
  },
  text: {
    color: '#fff',
    ...FONTS.heavy,
    fontSize: calcFont(16.7),
  },
});

export default styles;
