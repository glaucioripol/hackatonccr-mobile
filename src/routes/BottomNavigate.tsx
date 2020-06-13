import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather as Icon } from '@expo/vector-icons'

import { Notifications, PhysicalExercises, MapScreen, ActivityHistory } from '../screens'

import { primaryColor, blueMoreClean } from '../common/colors'

interface IParamsScrensOptions {
  route: { name: string }
}
interface IParamsTabBarIcon {
  color: string
  size: number | undefined
}

const icons = {
  notifications: 'bell',
  physicalExercises: 'activity',
  mapScreen: 'map-pin',
  activityHistory: 'clock',
  profile: 'user',
}

const getScreenOptions = ({ route: { name } }: IParamsScrensOptions) => ({
  // eslint-disable-next-line react/display-name
  tabBarIcon: ({ color, size }: IParamsTabBarIcon) => <Icon name={icons[name]} size={size} color={color} />,
})

const getTabBarOptions = {
  activeTintColor: '#fff',
  inactiveTintColor: blueMoreClean,
  showLabel: false,
  style: {
    backgroundColor: primaryColor,
  },
}

export const BottomBar: React.FC = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={getScreenOptions} tabBarOptions={getTabBarOptions} initialRouteName="mapScreen">
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="activityHistory" component={ActivityHistory} />
      <Tab.Screen name="mapScreen" component={MapScreen} />
      <Tab.Screen name="profile" component={MapScreen} />
      <Tab.Screen name="physicalExercises" component={PhysicalExercises} />
    </Tab.Navigator>
  )
}
