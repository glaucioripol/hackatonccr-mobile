import React, { useEffect, useCallback, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import { whatIsYourGender } from '../../../common/strings'

import { IcMulher } from '../../../assets/svg/IcMulher'
import { IcHomem } from '../../../assets/svg/IcHomem'

const genderTypes = {
  woman: 'feminino',
  man: 'masculino',
}

interface IProps {
  gender: string
  handleChangeSelect(changedGender: string): void
}

export const SelectGender: React.FC<IProps> = ({ gender, handleChangeSelect }) => {
  const [isMan, setIsMan] = useState(true)

  const updateGender = useCallback(handleChangeGender, [])
  function handleChangeGender(selectedGender: string) {
    return () => {
      handleChangeSelect(selectedGender)
      if (selectedGender === genderTypes.man) {
        setIsMan(true)
      } else {
        setIsMan(false)
      }
    }
  }

  useEffect(startComponent, [])
  function startComponent() {
    if (gender === '' && isMan) {
      handleChangeSelect(genderTypes.man)
    }
  }

  return (
    <View style={styles.containerGender}>
      <Text style={styles.textWithColor}>{whatIsYourGender}</Text>
      <View style={styles.containerOptionGendersContents}>
        <View style={styles.containerOptionGenders}>
          <TouchableOpacity
            style={[styles.optionsItemGender, styles.haveNext, isMan && styles.optionsItemGenderSelected]}
            onPress={updateGender(genderTypes.man)}>
            <IcHomem selected={isMan} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionsItemGender, !isMan && styles.optionsItemGenderSelected]}
            onPress={updateGender(genderTypes.woman)}>
            <IcMulher selected={!isMan} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
