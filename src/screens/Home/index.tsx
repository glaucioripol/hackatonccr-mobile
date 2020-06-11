import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

export const Home: React.FC = () => {
  const { navigate } = useNavigation()
  function goToDetails() {
    navigate('details')
  }
  return (
    <View>
      <Text>Aqui é a home</Text>

      <RectButton style={{ backgroundColor: '#c7c7c7', padding: 8, borderRadius: 8 }} onPress={goToDetails}>
        <Text style={{ textAlign: 'center' }}>ir para detalhles</Text>
      </RectButton>
    </View>
  )
}
