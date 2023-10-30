import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// URL
import { URL } from "../constants/api";

// ACTIONS
import { fetchSuccess, fetchFailure } from "../redux/product.slice";

import { getAllProduct } from "../selector/productSelector";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => getAllProduct(state));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, status } = await axios.get(URL.GET_ALL_PRODUCT);
        if (status === 200) {
          console.log("SUCCES GET PRODUCT");
          dispatch(fetchSuccess(data));
        }
      } catch (error) {
        console.error(error);
        //
      }
    };
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => {
    const { _id, name, price, picture } = item;

    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Detail_Product", {
            id: _id,
          });
        }}
      >
        <View>
          <Image style={styles.img} source={{ uri: picture }} />
          <Text>{name}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {},
  img: {
    width: 200,
    height: 150,
  },
});
