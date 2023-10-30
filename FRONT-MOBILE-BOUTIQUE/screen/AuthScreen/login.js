import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useContext, useState } from "react";

// CONTEXT
import { AuthContext } from "../../context/authContext";

// ICONES
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const _onChangeText = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://i.pinimg.com/564x/10/3e/0d/103e0d9cf5f12633337a30bd75deb027.jpg",
        }}
      />
      <Text style={styles.title}>Sneakers</Text>

      {/* EMAIL */}
      <View style={styles.inputContainer}>
        <Entypo style={styles.icons} name="email" />
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#808080"
          onChangeText={(val) => _onChangeText("email", val)}
        />
      </View>

      {/* PASSWORD */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons style={styles.icons} name="security" />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#808080"
          secureTextEntry
          onChangeText={(val) => _onChangeText("password", val)}
        />
        <TouchableOpacity>
          <Text style={{ color: "#0065ff" }}>Forgot ?</Text>
        </TouchableOpacity>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          login(user);
        }}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* MEDIAS */}

      <View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          log in with
        </Text>
      </View>

      <View style={styles.mediaContainer}>
        {/* GOOGLE */}
        <TouchableOpacity style={styles.mediaButton}>
          <Image
            style={styles.media}
            source={require("../../assets/icons/google.png")}
          />
        </TouchableOpacity>

        {/* TWITTER */}
        <TouchableOpacity style={styles.mediaButton}>
          <Image
            style={styles.media}
            source={require("../../assets/icons/x.png")}
          />
        </TouchableOpacity>

        {/* FACEBOOK */}
        <TouchableOpacity style={styles.mediaButton}>
          <Image
            style={styles.media}
            source={require("../../assets/icons/facebook.png")}
          />
        </TouchableOpacity>
      </View>

      {/* REGISTER LINK */}
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: 600  }} >Don't have an account ?</Text>
        <TouchableOpacity>
          <Text style={{ color: '#0065ff', marginLeft: 3  }} >Create an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#fff",
  },
  logo: {
    alignSelf: "center",
    width: 300,
    height: 200,
  },
  title: {
    textAlign: "center",
    fontWeight: 600,
    marginBottom: 30,
    color: "#333",
    fontSize: 28,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  icons: {
    size: 30,
    color: "#666",
    marginRight: 5,
  },
  input: {
    flex: 1,
    outlineStyle: "none"
  },
  buttonLogin: {
    marginBottom: 20,
    borderRadius: 5,
    padding: 20,
    backgroundColor: "#0065ff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 16,
    textAlign: "center",
  },
  mediaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  mediaButton: {
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  media: {
    width: 28,
    height: 28,
  },
});
