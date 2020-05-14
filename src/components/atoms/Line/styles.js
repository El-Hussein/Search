import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/Colors';
import { calcWidth, calcHeight } from '../../../utils';

const styles = StyleSheet.create({
  line: (width, height, color) => {
    return {
      backgroundColor: color ? color : COLORS.dark,
      width: width ? width : calcWidth(300),
      height: height ? height : calcHeight(1),
      alignSelf: 'center',
    };
  },
});

export default styles;
