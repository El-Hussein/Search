import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../common/Colors';
import { FONTS } from '../../../common';

const styles = StyleSheet.create({
  text: {
    ...FONTS.roman,
    color: COLORS.greyishBrown,
    textAlign: Platform.OS === 'ios' ? 'left' : null,
  },
});

export default styles;
