import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { useSelector, useDispatch } from 'react-redux'

import { informationRetrieveState } from '../../redux/information/selectors'
import { retrieveInformationActions } from '../../redux/information/Retrieve/actions'
import { AuthActions } from '../../redux/auth/actions'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  function goToDetails() {
    // navigate('details')
    dispatch(AuthActions.loginSuccess('111111', 'glaucinho'))
  }
  // const alo = useSelector(informationRetrieveState)
  const alo = useSelector((state) => state.auth)
  return (
    <View>
      <Text>Aqui é a home</Text>

      <Text>{JSON.stringify(alo)}</Text>

      <RectButton style={{ backgroundColor: '#c7c7c7', padding: 8, borderRadius: 8 }} onPress={goToDetails}>
        <Text style={{ textAlign: 'center' }}>ir para detalhles</Text>
      </RectButton>
    </View>
  )
}
