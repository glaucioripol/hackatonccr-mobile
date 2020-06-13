import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import { styles } from './styles'

import { primaryColor } from '../../common/colors'
import { emailText, whatsAppNumber, describeRegisterScreen, whatIsYourGender, continueText } from '../../common/strings'

import { Card, MyInput, RadiusButton } from '../../components'

export const Register: React.FC = () => {
  const [dataForm, setDataForm] = useState({
    email: '',
    cellphoneNumber: '',
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
  }
  return (
    <ScrollView style={styles.container}>
      <Card>
        <View
          style={{
            backgroundColor: primaryColor,
            width: '100%',
            height: 170,
            marginBottom: 16,
            borderRadius: 4,
          }}
        />

        <Text style={[styles.textWithColor, styles.textDescribe]}>{describeRegisterScreen}</Text>

        <View style={styles.spaceBetweenInputAndDescribe} />

        <MyInput
          labelText={emailText}
          currenteValueInput={dataForm.email}
          getCurrentValueInputed={handleChangeInputs('email')}
          maxLength={11}
        />

        <View style={styles.spaceBetweenInputs} />
        <MyInput
          labelText={whatsAppNumber}
          currenteValueInput={dataForm.cellphoneNumber}
          getCurrentValueInputed={handleChangeInputs('cellphoneNumber')}
          maxLength={11}
        />

        <View style={styles.containerGender}>
          <Text style={styles.textWithColor}>{whatIsYourGender}</Text>
          <View style={styles.containerOptionGendersContents}>
            <View style={styles.containerOptionGenders}>
              <View style={[styles.optionsItemGender, styles.optionsItemGenderSelected, styles.haveNext]} />
              <View style={styles.optionsItemGender} />
            </View>
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
    </ScrollView>
  )
}
