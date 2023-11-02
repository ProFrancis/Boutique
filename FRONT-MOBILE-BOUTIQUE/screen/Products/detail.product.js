import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

// CONTEXT
import { AuthContext } from "../../context/AuthContext";

// ACTION
import { fetchDeleteSucess } from "../../redux/product.slice";

// SELECTOR
import { findProductById } from "../../selector/productSelector";

// Icons
import Notif from "react-native-vector-icons/Ionicons";

// URL
import { URL } from "../../constants/api";

export default function DetailProduct({ route }) {
  const { id } = route.params;
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const product = useSelector((state) => findProductById(state, id));

  const deleteProduct = async () => {
    try {
      const { status } = await axios.delete(`${URL.DELETE_PRODUCT}/${id}`);

      if (status === 200) {
        dispatch(fetchDeleteSucess(id));
        navigation.navigate("List");
      }
    } catch (error) {
      console.log(error.message);
    }
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

        {/* IMG */}
        <Image
          style={[styles.img, styles.imagePosition]}
          source={{ uri: product?.picture }}
          resizeMode="contain"
        />

        {/* BLOCK AFTER IMAGE  */}
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/images/icons/heart.png")}
              />
              <Text style={{ fontWeight: 600, marginLeft: 10 }}>
                {product?.like}
              </Text>
            </View>
            <Text style={{ fontWeight: 600, fontSize: 18 }}>
              {product?.name}
            </Text>
            <Text style={{ fontWeight: 600 }}>{product?.price}$</Text>
          </View>

          {/* DESCRIPTION */}
          <Text style={{ fontSize: 20, paddingVertical: 30 }}>
            {product?.description}
          </Text>

          {/* BUTTON (UPDATE, ADD, DELETE) */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <Pressable>
                <Image
                  style={{ width: 50, height: 50, marginBottom: 5 }}
                  source={require("../../assets/images/icons/refresh.png")}
                />
              </Pressable>
              <Text>Update</Text>
            </View>

            <View>
              <Pressable>
                <Image
                  style={{ width: 50, height: 50, marginBottom: 5 }}
                  source={require("../../assets/images/icons/plus.png")}
                />
              </Pressable>
              <Text>Add Cart</Text>
            </View>

            <View>
              <Pressable onPress={() => deleteProduct()}>
                <Image
                  style={{ width: 50, height: 50, marginBottom: 5 }}
                  source={require("../../assets/images/icons/remove.png")}
                />
              </Pressable>
              <Text>Delete</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flexCenter: {
    marginVertical: 20,
    paddingHorizontal: 20,
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
  img: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#f6F6F6",
  },
});
