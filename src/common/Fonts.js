import { StyleSheet, Platform } from 'react-native';

export const FONTS = StyleSheet.create({
  roman: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Avenir-Roman',
    fontWeight: Platform.OS === 'ios' ? '400' : null,
  },
  medium: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Avenir-Medium',
    fontWeight: Platform.OS === 'ios' ? '700' : null,
  },
  heavy: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Avenir-Heavy',
    fontWeight: Platform.OS === 'ios' ? '700' : null,
  },
});
