import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { URL } from "../constants/api";

export default function Home({ navigation }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try{
        const { data, status } = await axios.get(URL.FETCH_PLAYERS)
        setPlayers(data)
      }catch(error){
        console.error(error.message)
      }
    }
    fetchPlayers()
  }, [])

  const renderItem = ({ item }) => {
    const { _id, pseudo, email } = item
    
    return(
      <Pressable
        onPress={() => {
          navigation.navigate("Detail", {
            id: _id
          })
        }}
      >
        <View>
          <Text>{pseudo} : {email} </Text>
        </View>
      </Pressable>
    )
  }

  return (
    <FlatList
      data={players}
      keyExtractor={item => item._id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({});
