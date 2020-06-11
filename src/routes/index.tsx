import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, Details } from '../screens'

export const Routes: React.FC = () => {
  const StackNavigator = createStackNavigator()
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="home" component={Home} />
        <StackNavigator.Screen name="details" component={Details} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
