import React from 'react'
import { View, Text, Image } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

import { logoPng } from '../../assets/png'
import { continueText } from '../../common/strings'

import { Card, RadiusButton } from '../../components'

export const WelcomeScreen: React.FC = () => {
  const { navigate } = useNavigation()

  function nextStep() {
    navigate('register')
  }
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.contentCard}>
          <Image
            source={logoPng}
            height={170}
            resizeMode="contain"
            style={{ width: '100%', height: 170, resizeMode: 'contain' }}
          />

          <View style={styles.containerContentText}>
            <Text style={styles.cetralizeText}>
              Seja bem vindo ao <Text style={[styles.textWithColor, styles.textBold]}>Vida na Estrada</Text>, Aplicativo
              desenvolvido com o objetivo de auxiliar os caminhoneiros a terem mais qualidade no seu trabalho.
            </Text>
          </View>
        </View>
      </Card>

      <View style={styles.containerButton}>
        <RadiusButton onPressButton={nextStep}>
          <View style={styles.containerContentButton}>
            <View style={styles.textButtonContainer}>
              <Text style={styles.textButton}>{continueText}</Text>
            </View>
            <View style={styles.iconButton}>
              <Icon name="arrow-right" color="#fff" size={20} />
            </View>
          </View>
        </RadiusButton>
      </View>
    </View>
  )
}
