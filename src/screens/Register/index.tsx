import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'

import { styles } from './styles'

import { getCellphoneNumberUser, describeRegisterScreen, whatIsYourGender } from '../../common/strings'

import { Card, MyInput } from '../../components'

export const Register: React.FC = () => {
  const [cellphoneUser, setCellphoneUser] = useState('')
  return (
    <ScrollView style={styles.container}>
      <Card>
        <View style={{ marginTop: 200 }} />
        <Text style={styles.textWithColor}>{describeRegisterScreen}</Text>
        <View style={{ marginTop: 80 }} />
        <MyInput
          labelText={getCellphoneNumberUser}
          currenteValueInput={cellphoneUser}
          getCurrentValueInputed={setCellphoneUser}
          maxLength={11}
        />
        <View style={{ marginTop: 24 }} />
        <Text style={styles.textWithColor}>{whatIsYourGender}</Text>
        <View style={{ marginTop: 90 }} />
      </Card>
    </ScrollView>
  )
}
