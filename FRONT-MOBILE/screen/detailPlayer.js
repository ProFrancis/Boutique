import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { URL } from '../constants/api'

export default function Detail({ route, navigation }) {
  const [player,setPlayer] = useState([])

  const { id } = route.params

  useEffect(() => {
    const fetchPlayer = async () => { 
      try{
        const { data, status } = await axios.get(`${URL.FETCH_PLAYER_BYID}/${id}`)
        // const response = await axios.get(URL.FETCH_PLAYER_BYID +  id)
        if(status == 200) {
          // Affiche un message de succès dans la console
          console.log("SUCCES GET");
        }
       setPlayer(data)
      }catch(error){
        throw error.message
      }
    }
    fetchPlayer()
  }, [])

  const deletePlayer = async () => {
    try{
      const { data, status } = await axios.delete(`${URL.DELETE_PLAYER}/${id}`)
      if(status == 200) console.log(data);
    }catch(error){
      throw { message: error.message, response: error.response.data }
    }
  }

  return (
    <View>
      <Text>{player.pseudo}</Text>
      <Text>{player.email}</Text>
      <Button
        title='Modifier'
        onPress={() => {
          navigation.navigate('Update', {
            id: id
          })
        }}
      />
      <Button 
        title='Supprimer'
        onPress={deletePlayer}
      />
    </View>
  )
}

const styles = StyleSheet.create({})