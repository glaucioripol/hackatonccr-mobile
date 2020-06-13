import React, { useState, useCallback } from 'react'
import { Text, TextInput } from 'react-native'

import { styles } from './styles'

interface IProps {
  labelText?: string
  currenteValueInput: string
  getCurrentValueInputed(text: string): void
  maxLength?: number
  multiline?: boolean
}

type FocusTypes = 'focus' | 'blur'

export const MyInput: React.FC<IProps> = ({
  labelText,
  currenteValueInput,
  getCurrentValueInputed,
  maxLength,
  multiline,
}) => {
  const [inputInFocus, setInputInFocus] = useState(false)

  function handleInputFocus(typeEvent: FocusTypes) {
    return () => {
      const isFocus = typeEvent === 'focus'
      setInputInFocus(isFocus)
    }
  }
  const inputStyleAcrossFocus = () => (inputInFocus ? styles.inputInFocus : styles.inputInBlur)
  const currentStyle = useCallback(inputStyleAcrossFocus, [inputInFocus])

  return (
    <>
      {labelText && <Text style={styles.label}>{labelText}</Text>}
      <TextInput
        value={currenteValueInput}
        onChangeText={getCurrentValueInputed}
        multiline={multiline}
        maxLength={maxLength}
        style={[styles.input, currentStyle()]}
        onFocus={handleInputFocus('focus')}
        onBlur={handleInputFocus('blur')}
      />
    </>
  )
}

MyInput.defaultProps = {
  maxLength: 120,
  multiline: false,
}
