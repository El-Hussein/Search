import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { AppText, AppIcon } from "../../atoms";
import { ICONS } from "../../../common";
import Modal from 'react-native-modal'; 
let ProductCard = ({ item, disabled, onPress, ...rest }) => {
  const [modalVisiblity, setModalVisiblity] = useState(false);

  const _handlePress = () => {
    setModalVisiblity(true);
    onPress();
  };

  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={styles.productCard}
        onPress={_handlePress}
        {...rest}
      >
        <View style={styles.productData}>
          <AppText style={styles.productName}>{item.name}</AppText>
          <AppText style={styles.description} numberOfLines={1}>
            {item.description}
          </AppText>
        </View>
        <AppIcon name={ICONS.selectArrow} />
      </TouchableOpacity>
      {/* we can move this modal out with seperated component but i am really sleepy and almost see keyboard */}
      <Modal isVisible={modalVisiblity}>
        <View style={styles.modalContent}>
          <AppText style={styles.productName}>{item.name}</AppText>
          <AppText style={styles.description}>{item.description}</AppText>
          <TouchableOpacity
            style={styles.close}
            onPress={() => setModalVisiblity(false)}
          >
            <AppText style={styles.closeText}>close</AppText>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

ProductCard = React.memo(ProductCard);
export { ProductCard };

ProductCard.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};
