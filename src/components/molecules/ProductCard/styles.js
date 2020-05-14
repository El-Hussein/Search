import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../common/Colors';
import { FONTS } from '../../../common';
import { calcHeight, calcWidth, calcFont } from '../../../utils';

const styles = StyleSheet.create({
  productCard: {
    flexDirection:'row',
    paddingHorizontal: calcWidth(5),
    paddingVertical: calcWidth(10),
    justifyContent:'space-around',
    alignItems:'center',
    borderBottomWidth: calcHeight(1),
    borderBottomColor: COLORS.coolGrey,
    width: "99%"
  },
  productData:{
    width: '92%',
  },  
  productName:{
    fontWeight:'bold',
    fontSize: calcFont(25),
    color: COLORS.brownishGrey
  },
  description:{
    fontSize: calcFont(20),
    color: COLORS.brownishGrey
  },
  modalContent:{
    justifyContent:'center',
    alignItems:'center',
    padding: calcWidth(20),
    backgroundColor: '#fff'
  },
  close:{
    elevation: 3,
    padding: calcWidth(10),
    paddingHorizontal: calcWidth(25),
    backgroundColor: 'red',
    borderRadius: calcWidth(5),
    marginTop: calcHeight(10)
  },
  closeText:{
    color: '#fff',
    fontSize: calcFont(28),
    fontWeight:'bold'
  }
});

export default styles;
