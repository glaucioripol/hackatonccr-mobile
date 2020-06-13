import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { BottomBar } from './BottomNavigate'
import { Home, Details, Register } from '../screens'

export const Routes: React.FC = () => {
  const StackNavigator = createStackNavigator()
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="bottomBar" headerMode="none">
        <StackNavigator.Screen name="bottomBar" component={BottomBar} />
        <StackNavigator.Screen name="home" component={Home} />
        <StackNavigator.Screen name="register" component={Register} />
        <StackNavigator.Screen name="details" component={Details} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
