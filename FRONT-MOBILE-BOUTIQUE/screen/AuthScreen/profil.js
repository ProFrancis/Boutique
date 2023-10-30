import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useContext} from "react";

import { URL } from '../../constants/api'

import { AuthContext } from "../../context/authContext";

export default function Profil() {
  const [profil, setProfil] = useState({})
  const { user } = useContext(AuthContext)

  const _onChangeText = (key,value) => {
    setProfil({...profil, [key]: value})
  }

  const _handleSubmit = async () => {
    try{
      const { data, status } = await axios.put(`${'a modifier'}/${id}`, profil)
      if(status == 200) console.log('User Updated ! ✅');
    }catch(error){
      throw error.message
    }
  }

  return (
    <View>
      <Text>Profile</Text>
      <TextInput
        style={styles.textIput}
        defaultValue={user.firstname}
        onChangeText={(val) => _onChangeText("firstname", val)}
      />
      <TextInput
        style={styles.textIput}
        defaultValue={user.email}
        onChangeText={(val) => _onChangeText("email", val)}
      />
      <TextInput
        style={styles.textIput}
        defaultValue={user.avatar}
        onChangeText={(val) => _onChangeText("avatar", val)}
      />
      <Button title="valider" onPress={_handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({});
