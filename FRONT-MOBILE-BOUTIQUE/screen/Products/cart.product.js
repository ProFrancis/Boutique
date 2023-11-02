import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";

// CONTEXT
import { AuthContext } from "../../context/AuthContext";

// Icons
import Notif from "react-native-vector-icons/Ionicons";

export default function Cart() {
  const [product, setProduct] = useState([
    {
      _id: "653cf226eda2e53350445b32",
      name: "Air Force 1 '07",
      price: 99.99,
      description:
        "On a associé l'indémodable coloris blanc à du cuir qui change temporairement de couleur sous les rayons UV. On a aussi ajouté des empiècements en daim premium pleine fleur qui ne changent pas de couleur avec le soleil, pour jouer sur les textures, de jour comme de nuit.",
      picture:
        "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/9fabb2ae-e433-45da-b75b-f67cca81f0f0/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
      like: 0,
      createdAt: "2023-10-28T11:36:06.254Z",
      updatedAt: "2023-10-28T11:36:06.254Z",
      __v: 0,
    },
    {
      _id: "653cf330eda2e53350445b39",
      name: "Nike Air Max 90 Futura",
      price: 129,
      description: "Chaussure pour femme",
      picture:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84e48564-3503-475e-8f86-6ddc062b2101/chaussure-air-max-90-futura-pour-lWBRQc.png",
      like: 0,
      createdAt: "2023-10-28T11:40:32.745Z",
      updatedAt: "2023-10-28T11:40:32.745Z",
      __v: 0,
    },
  ]);

  const { user } = useContext(AuthContext);

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
        {/* PRODUCT ADD */}
        <View style={{ backgroundColor: "#ddd", padding: 20 }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: 200,
                  height: 130,
                }}
                source={{ uri: product[0].picture }}
              />
              <View style={{ justifyContent: "center", padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {product[0].name}
                </Text>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../assets/images/icons/heart.png")}
                  />
                  <Text style={{ marginLeft: 10, color: "#ddd", fontSize: 18 }}>
                    {product[0].like}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{ alignSelf: "center", fontSize: 22 }}>- 1 +</Text>
          </View>
        </View>
        {/* SHIPPING */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>SHIPPING</Text>
          {/* DELIVERY */}
          <View style={styles.shipping}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../../assets/images/icons/delivery.png")}
              />
              <View
                style={{
                  justifyContent: "center",
                  justifyContent: "space-evenly",
                  paddingHorizontal: 20,
                }}
              >
                <Text style={styles.textTopShipping}>
                  Arrival December 25th
                </Text>
                <Text style={styles.textBotShipping}>
                  Sibander Regular ($42)
                </Text>
              </View>
            </View>

            <Image
              style={{ width: 20, height: 20, alignSelf: "center" }}
              source={require("../../assets/images/icons/next.png")}
            />
          </View>
          {/* VOUCHER */}
          <View style={styles.shipping}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../../assets/images/icons/voucher.png")}
              />
              <View
                style={{
                  justifyContent: "center",
                  justifyContent: "space-evenly",
                  paddingHorizontal: 20,
                }}
              >
                <Text style={styles.textTopShipping}>Attached Voucher</Text>
                <Text style={styles.textBotShipping}>
                  Dscount 30% From Brands
                </Text>
              </View>
            </View>

            <Image
              style={{ width: 20, height: 20, alignSelf: "center" }}
              source={require("../../assets/images/icons/next.png")}
            />
          </View>
          {/* SET AN ORDER */}
          <View style={styles.block__infoTotal}>
            <Text style={{ color: "#cfcfcf", fontWeight: 600 }}>Subtotal</Text>
            <Text style={{ fontWeight: 600, color: "#19196b" }}>
              $100<Text style={{ color: "#66669d" }}>,00</Text>
            </Text>
          </View>
          <View style={styles.block__infoTotal}>
            <Text style={{ color: "#cfcfcf", fontWeight: 600 }}>Shipping</Text>
            <Text style={{ fontWeight: 600, color: "#19196b" }}>
              $100<Text style={{ color: "#66669d" }}>,00</Text>
            </Text>
          </View>
          <View style={styles.block__infoTotal}>
            <Text style={{ color: "#cfcfcf", fontWeight: 600 }}>Taxe</Text>
            <Text style={{ fontWeight: 600, color: "#19196b" }}>
              $100<Text style={{ color: "#66669d" }}>,00</Text>
            </Text>
          </View>
          {/*  VOUCHER */}
          <View style={styles.block__voucher}>
            <Text style={{ color: "#19196b", fontWeight: 600 }}>
              Discount (30%)
            </Text>
            <Text style={{ fontWeight: 600, color: "#a6120b" }}>
              -$100<Text style={{ color: "#e42120" }}>,00</Text>
            </Text>
          </View>
          {/* ORDER  */}
          <View style={styles.buy}>
            <Text style={{ color: "#fff", fontWeight: 600 }}>Set An Order</Text>
            <Text style={{ fontWeight: 600, color: "#fff" }}>
              $100<Text style={{ color: "#d0d0d0" }}>,00</Text>
            </Text>
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
  shipping: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cfcfcf",
    padding: 10,
  },
  textTopShipping: {
    color: "#cfcfcf",
    fontSize: 18,
  },
  textBotShipping: {
    fontWeight: "bold",
    fontSize: 18,
  },
  block__infoTotal: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  block__voucher: {
    flexDirection: "row",
    backgroundColor: "#d9d9d9",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  buy: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    backgroundColor: "#19196b",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
