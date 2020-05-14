import React, { useState, useEffect } from "react";
import { View, Image, ViewPropTypes, TextInput, FlatList } from "react-native";
import { AppText, Button, AppIcon, Line } from "../../atoms";
import PropTypes from "prop-types";
import styles from "./styles";
import { ICONS, COLORS } from "../../../common";
import { ProductCard } from "../../molecules";
import { calcWidth, calcHeight } from "../../../utils";
import {
  AddProductDB,
  AllProductsDB,
  DeleteProductDB,
  ProductsCountDB,
} from "../../../utils/DB/Modals/Product";
import { get_request } from "../../../services/api";

const HomeTemplate = () => {
  const [historyProducts, setHistoryProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    _getProductsFromDB()
  }, []);

  const _getProductsFromDB = ()=>{
    AllProductsDB().then((ps) => {
      setHistoryProducts(ps);
    });
  }

  const [isHistory, setIsHistory] = useState(true);
  const [trem, setTrem] = useState("");

  const _handleNewProduct = (product) => {
    console.log(product);
    ProductsCountDB().then((count) => {
      // more than 3 items will delete with id historyProducts[2].date
      if (count > 2) {
        DeleteProductDB(historyProducts[historyProducts.length-1].date);
      }
      AddProductDB(product);
      _getProductsFromDB();
    });
  };

  const _search = async (trem) => {
    // clear search products and back to history
    if(trem == ''){
      setProducts([]);
      setIsHistory(true);
      return;
    }
    const response = await get_request({
      target: "v2/5ebc08392e00004b009f4125/trem=" + trem,
    });
    if (response.data) setProducts(response.data);
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        {/* Search box */}
        <View style={styles.searchBox}>
          <AppIcon name={ICONS.search} color={COLORS.coolGrey} />
          <TextInput
            autoFocus={true}
            placeholder="type product name/decription"
            style={styles.searchInput}
            onChangeText={(trem) => {
              setIsHistory(false);
              setTrem(trem);
              _search(trem);
            }}
          />
        </View>
        <AppText style={styles.productWord}>Products</AppText>
        <Line
          color={COLORS.redishOrange}
          width={calcWidth(20)}
          height={calcHeight(2)}
        />
      </View>

      {/* product list */}
      <View>
        <FlatList
          data={products.length? products : historyProducts}
          renderItem={({ item }) => (
            <ProductCard
              disabled={isHistory}
              onPress={() => _handleNewProduct(item)}
              item={item}
            />
          )}
          keyExtractor={(item, index) => `product--${index}`}
        />
      </View>
    </View>
  );
};

export { HomeTemplate };

HomeTemplate.propTypes = {};
