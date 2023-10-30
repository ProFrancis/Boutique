import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

 // COMPONENTS
 import Home from '../screen/home'
 import AddPlayer from '../screen/addPlayer'
 import DetailPlayer from '../screen/detailPlayer'
 import UpdatePlayer from '../screen/updatePlayer'

const Tabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export function PlayerStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='List' component={Home} />
      <Stack.Screen name='Detail' component={DetailPlayer} />
      <Stack.Screen name='Update' component={UpdatePlayer} />
    </Stack.Navigator>
  )
}

export default function AppNavigation() {
  return(
    <NavigationContainer>
      <Tabs.Navigator >
        <Tabs.Screen name='Home' component={PlayerStack} options={{headerShown: false}} />
        <Tabs.Screen name='Add' component={AddPlayer} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}