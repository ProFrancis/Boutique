import React, {useState} from "react";

import axios from 'axios'
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { URL } from "../constants/api";

export default function AddPlayer() {

  const [player, setPlayer] = useState({
    pseudo: '',
    email: '',
    password: ''
  })

  const _onChangeText = (key,value) => {
    setPlayer({...player, [key]: value})
  }

  const _handleSubmit = async () => {
    try{
        // Envoie une requete POST à l'URL spécifié avec les donnée du joueur
        const data = await axios.post(URL.POST_PLAYER, player)
        // Vérifie si le statut de la réponse est 201 (création réussie)
        if(data.status == 201) {
          // Affiche un message de succès dans la console
          return console.log("SUCCES CREATION");
        }
    }catch(error){
      // En cas d'ereur, affiche le message d'erreur dans la console
      throw error.message
    }
  }

  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Pseudo"
        maxLength={20}
        onChangeText={(val) => _onChangeText("pseudo", val)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="email"
        maxLength={20}
        onChangeText={(val) => _onChangeText("email", val)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        secureTextEntry={true}
        maxLength={20}
        onChangeText={(val) => _onChangeText("password", val)}
      />
      <Button
        title="valider"
        onPress={_handleSubmit}
      />
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    height: 50,
    fontSize: 25,
  },
});
