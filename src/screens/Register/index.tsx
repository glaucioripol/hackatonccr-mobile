import React, { useState } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

import { emailText, whatsAppNumber, describeRegisterScreen, continueText } from '../../common/strings'
import { logoPng } from '../../assets/png'

import { Card, MyInput, RadiusButton } from '../../components'
import { SelectGender } from './SelectGender'

export const Register: React.FC = () => {
  // const { navigate } = useNavigation()
  const [dataForm, setDataForm] = useState({
    email: '',
    cellphone: '',
    gender: '',
  })

  function handleChangeInputs(fieldName: string) {
    return (text: string) => {
      setDataForm({
        ...dataForm,
        [fieldName]: text,
      })
    }
  }

  function nextStep() {
    // requsiçõa backend e movimentação
    // navigate('next')
    // console.log(dataForm)
  }
  return (
    <ScrollView style={styles.container}>
      <Card>
        <View>
          <Image
            source={logoPng}
            height={170}
            resizeMode="contain"
            style={{ width: '100%', height: 170, resizeMode: 'contain' }}
          />
        </View>

        <Text style={[styles.textWithColor, styles.textDescribe]}>{describeRegisterScreen}</Text>

        <View style={styles.spaceBetweenInputAndDescribe} />

        <MyInput
          labelText={emailText}
          currenteValueInput={dataForm.email}
          getCurrentValueInputed={handleChangeInputs('email')}
        />

        <View style={styles.spaceBetweenInputs} />
        <MyInput
          labelText={whatsAppNumber}
          currenteValueInput={dataForm.cellphone}
          getCurrentValueInputed={handleChangeInputs('cellphone')}
          maxLength={11}
        />

        <SelectGender gender={dataForm.gender} handleChangeSelect={handleChangeInputs('gender')} />
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
    </ScrollView>
  )
}
