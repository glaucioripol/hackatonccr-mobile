import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { WelcomeScreen, Register } from '../screens'

export const NotAuthenticatedNavigate: React.FC = () => {
  const StackNavigator = createStackNavigator()
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="welcome" headerMode="none">
        <StackNavigator.Screen name="welcome" component={WelcomeScreen} />
        <StackNavigator.Screen name="register" component={Register} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
