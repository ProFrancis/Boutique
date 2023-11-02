import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// URL
import { URL } from "../constants/api";

// SERVICE

// CONTEXT
import { AuthContext } from "../context/AuthContext";
import { fetchFailure, fetchSuccess } from "../redux/product.slice";

import { getAllProduct } from "../selector/productSelector";

// ICONES
import Search from "react-native-vector-icons/Feather";
import Grid from "react-native-vector-icons/Ionicons"; // grid
import Circle from "react-native-vector-icons/FontAwesome5";
import Notif from "react-native-vector-icons/Ionicons"; // notifications-outline
import Man from "react-native-vector-icons/Ionicons"; // man
import Woman from "react-native-vector-icons/Ionicons"; // woman

export default function Home({ navigation }) {
  const [articles, setArticles] = useState([]);
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const products = useSelector((state) => getAllProduct(state));

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, status } = await axios.get(URL.GET_ALL_PRODUCT);
        console.log(data);
        if (status === 200) {
          setArticles(data);
          dispatch(fetchSuccess(data));
          console.log("Succès de la requête");
        }
      } catch (error) {
        console.log(error);
        dispatch(fetchFailure(error.message));
        throw error.message;
      }
    };
    fetchArticles();
  }, []);

  const renderItem = ({ item }) => {
    const { _id, name, picture } = item;
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Detail_Product", {
            id: _id,
          });
        }}
      >
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={{ uri: picture }}
            resizeMode="contain"
          />
          <Text style={styles.legend}>{name}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        {/* BLOCK HEADER */}
        <View style={styles.flexCenter}>
          <View style={styles.block__avatar}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://cdn.icon-icons.com/icons2/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png",
              }}
            />
            <View>
              <Text style={{ fontSize: 12, color: "#696969", marginLeft: 10 }}>
                Hello {user?.firstname}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 600, marginLeft: 10 }}>
                What do you need today ?
              </Text>
            </View>
          </View>
          <View>
            <Notif size={20} name="notifications-outline" />
          </View>
        </View>

        {/* BLOCK SEARCH  */}
        <View style={styles.block__search}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderRadius: 100,
              padding: 5,
              flex: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Search size={23} name="search" />
              <TextInput style={styles.search} placeholder="search product" />
            </View>
            <TouchableOpacity style={{ alignSelf: "flex-end" }}>
              <Circle size={25} name="circle" style={{ color: "#191970" }} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ fontWeight: "bold" }}>SHIPPING</Text>

        <View style={{ flexDirection: "row", paddingVertical: 15 }}>
          <View style={{ alignItems: "center" }}>
            <Grid
              size={30}
              style={{
                backgroundColor: "#191970",
                borderRadius: 100,
                paddingHorizontal: 8,
                paddingVertical: 5,
                color: "#f5fffa",
              }}
              name="grid"
            />
            <Text style={{ marginVertical: 5 }}>All</Text>
          </View>

          {/* MAN  */}

          <View style={{ alignItems: "center", marginLeft: 20 }}>
            <Man
              size={30}
              style={{
                backgroundColor: "#666",
                borderRadius: 100,
                paddingHorizontal: 8,
                paddingVertical: 5,
                color: "#f5fffa",
              }}
              name="man"
            />
            <Text style={{ marginVertical: 5 }}>Man</Text>
          </View>

          {/* WOM */}

          <View style={{ alignItems: "center", marginLeft: 20 }}>
            <Woman
              size={30}
              style={{
                backgroundColor: "#666",
                borderRadius: 100,
                paddingHorizontal: 8,
                paddingVertical: 5,
                color: "#f5fffa",
              }}
              name="woman"
            />
            <Text style={{ marginVertical: 5 }}>Woman</Text>
          </View>
        </View>

        <Text style={{ fontWeight: "bold" }}>PRODUCT</Text>
        <ScrollView style={{ flex: 1 }} horizontal={true}>
          <FlatList
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            contentContainerStyle={{ flexDirection: "row" }}
          />
        </ScrollView>
        <Text style={{ fontWeight: "bold" }}>POPULAIRE</Text>
        <ScrollView style={{ flex: 1 }} horizontal={true}>
          <FlatList
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            contentContainerStyle={{ flexDirection: "row" }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
  flexCenter: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  block__search: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  block__avatar: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 28,
    height: 28,
  },
  search: {
    size: 30,
    marginLeft: 10,
    color: "#666",
    outlineStyle: "none",
  },
  card: {
    alignItems: "center",
    margin: 5,
  },
  img: {
    width: 350,
    aspectRatio: 16 / 9,
    backgroundColor: "#f6F6F6",
  },
  legend: {},
});
