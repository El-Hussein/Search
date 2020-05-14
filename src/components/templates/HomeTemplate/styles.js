import { StyleSheet } from 'react-native';
import { calcWidth, calcHeight, calcFont } from '../../../utils';
import { FONTS, COLORS } from '../../../common';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor: COLORS.coolGrey,
    borderWidth: calcHeight(1),
    padding: calcWidth(5),
    borderRadius: calcWidth(8),
    width: calcWidth(400)
  },
  searchInput:{
    padding: 0,
    paddingHorizontal: calcWidth(5),
    margin: 0,
    width: calcWidth(370)
  },
  header:{
    backgroundColor: COLORS.paleGrey,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    padding:calcWidth(10)

  },
  productWord:{
    color: COLORS.dark,
    fontSize: calcFont(30),
    fontWeight: 'bold',
    marginVertical: calcHeight(20)
  },
});
