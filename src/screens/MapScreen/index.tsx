import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { MyModal } from '../../components'

// import { Container } from './styles';

export const MapScreen: React.FC = () => {
  const { navigate } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Text>alo</Text>
      <MyModal modalIsVisible={modalVisible}>
        <Text>alo</Text>
        <Button
          title="fechar"
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
        />
      </MyModal>

      <Button
        title="abrir"
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
      />

      <Button
        title="abrir tela de registro"
        onPress={() => {
          navigate('register')
        }}
      />
    </View>
  )
}