import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState, useContext } from "react";

import { URL } from "../../constants/api";

import { AuthContext } from "../../context/AuthContext";

// ICONES
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Profil() {
  const [profil, setProfil] = useState({});
  const { user } = useContext(AuthContext);

  const _onChangeText = (key, value) => {
    setProfil({ ...profil, [key]: value });
  };

  const _handleSubmit = async () => {
    try {
      const { data, status } = await axios.put(`${"a modifier"}/${id}`, profil);
      if (status == 200) console.log("User Updated ! ✅");
    } catch (error) {
      throw error.message;
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={{ paddingHorizontal: 50, paddingVertical: 50 }}>
        <View style={{ alignItems: "center", marginBottom: 50 }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://cdn.icon-icons.com/icons2/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png",
            }}
          />
          <Text style={{ fontWeight: 600, fontSize: 18 }}>
            {user.firstname}
          </Text>
        </View>
        <View style={styles.block__input}>
          <Feather style={styles.entypo} name="user" />
          <TextInput
            style={{ fontSize: 18, color: "#808080" }}
            defaultValue={user.firstname}
            onChangeText={(val) => _onChangeText("firstname", val)}
          />
        </View>
        <View style={styles.block__input}>
          <Entypo style={styles.entypo} name="email" />
          <TextInput
            style={{ fontSize: 18, color: "#808080" }}
            defaultValue={user.email}
            onChangeText={(val) => _onChangeText("email", val)}
          />
        </View>
        <View style={styles.block__input}>
          <AntDesign style={styles.entypo} name="picture" />
          <TextInput
            style={{ fontSize: 18, color: "#808080" }}
            defaultValue={user.avatar}
            onChangeText={(val) => _onChangeText("avatar", val)}
          />
        </View>

        <Pressable style={styles.button} onPress={_handleSubmit}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Update
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  entypo: {
    size: 40,
    color: "#808080",
    marginRight: 5,
  },
  input: {
    flex: 1,
    outlineStyle: "none",
  },
  block__input: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: "#19196b",
  },
});
