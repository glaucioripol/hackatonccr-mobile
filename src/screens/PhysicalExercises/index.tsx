import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { FontAwesome as Icon, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { myHealth, simpleRecipes, execisesText } from '../../common/strings'

import { Card, RadiusButton } from '../../components'

export const PhysicalExercises: React.FC = () => {
  const { navigate } = useNavigation()

  function navigateTo(goTo: string) {
    return () => {
      navigate(goTo)
    }
  }

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{myHealth}</Text>

          <View style={styles.spaceTopFistButton} />

          <RadiusButton onPressButton={navigateTo('mapScreen')}>
            <View style={styles.containerContentButton}>
              <Ionicons name="ios-restaurant" size={40} color="#FFF" />

              <View style={styles.contentText}>
                <Text style={styles.contentTextAdjust}>{simpleRecipes}</Text>
              </View>
            </View>
          </RadiusButton>

          <View style={styles.divider} />

          <RadiusButton onPressButton={navigateTo('mapScreen')}>
            <View style={styles.containerContentButton}>
              <Ionicons name="ios-walk" size={40} color="#FFF" />

              <View style={styles.contentText}>
                <Text style={styles.contentTextAdjust}>{execisesText}</Text>
              </View>
            </View>
          </RadiusButton>

          <View style={styles.divider} />

          <RadiusButton onPressButton={navigateTo('mapScreen')}>
            <View style={styles.containerContentButton}>
              <Icon name="heartbeat" size={40} color="#FFF" />

              <View style={styles.contentText}>
                <Text style={styles.contentTextAdjust}>{myHealth}</Text>
              </View>
            </View>
          </RadiusButton>
        </View>
      </Card>
    </View>
  )
}
