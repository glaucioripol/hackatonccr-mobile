import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather as Icon } from '@expo/vector-icons'

import { Notifications } from '../screens'

import { primaryColor, secondaryColor } from '../common/colors'

const icons = {
  characters: 'ios-person',
  episodes: 'ios-film',
  planets: 'ios-planet',
}

interface IParamsScrensOptions {
  route: { name: string }
}
interface IParamsTabBarIcon {
  color: string
  size: number | undefined
}

const getScreenOptions = ({ route: { name } }: IParamsScrensOptions) => ({
  // tabBarIcon: ({ color, size }) => <Icon name={icons[name]} size={size} color={color} />,
  // eslint-disable-next-line react/display-name
  tabBarIcon: ({ color, size }: IParamsTabBarIcon) => <Icon name="bell" size={size} color={color} />,
})

const getTabBarOptions = {
  activeTintColor: '#fff',
  inactiveTintColor: secondaryColor,
  style: {
    backgroundColor: primaryColor,
  },
}

export const BottomBar: React.FC = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={getScreenOptions} tabBarOptions={getTabBarOptions}>
      <Tab.Screen name="notifications" component={Notifications} />
    </Tab.Navigator>
  )
}
