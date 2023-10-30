import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { URL } from '../constants/api'
import axios from 'axios'

export default function UpdatePlayer({ route }) {
  const [player,setPlayer] = useState({})

  const { id } = route.params

  useEffect(() => {
    const fetchPlayer= async () => {
      try{
        const { data, status } = await axios.get(`${URL.FETCH_PLAYER_BYID}/${id}`)
        if(status == 200) console.log('SUCCES GET BY ID');
        setPlayer(data)
      }catch(error){
        throw error.message
      }
    }
    fetchPlayer()
  }, [])

  const _onChangeText = (key,value) => {
    setPlayer({...player, [key]: value})
  }

  const _handleSubmit = async () => {
    try{
      const { data, status } = await axios.put(`${URL.UPDATE_PLAYER}/${id}`, player)
      if(status == 200) console.log('Player Updated ! ✅');
    }catch(error){
      throw error.message
    }
  }

  return (
    <>
      <TextInput
        defaultValue={player.pseudo}
        maxLength={20}
        onChangeText={(val) => _onChangeText("pseudo", val)}
      />
      <TextInput
        defaultValue={player.email}
        maxLength={20}
        onChangeText={(val) => _onChangeText("email", val)}
      />
      <Button 
        title='valider' 
        onPress={_handleSubmit}
      />
    </>
  )
}

const styles = StyleSheet.create({})