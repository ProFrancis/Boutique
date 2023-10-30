import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// URL
import { URL } from "../../constants/api";

// ACTIONS
import {
  fetchStart,
  fetchDetailSucess,
  fetchFailure,
} from "../../redux/product.slice";

// SELECTOR 
import { findProductById } from "../../selector/productSelector";

export default function DetailProduct({ route }) {
  const { id } = route.params;
  const product = useSelector((state) => findProductById(state, id));
  
  return (
    <View>
      <Image style={styles.img} source={{ uri: product.picture }} />
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
      <Text>Like : {product.like}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  img: {
    width: 200,
    height: 150
  }
});

