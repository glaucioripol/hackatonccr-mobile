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
}) => (
  <>
    {labelText && <Text style={styles.label}>{labelText}</Text>}
    <TextInput
      value={currenteValueInput}
      onChangeText={getCurrentValueInputed}
      multiline={multiline}
      maxLength={maxLength}
      style={styles.input}
    />
  </>
)

MyInput.defaultProps = {
  maxLength: 120,
  multiline: false,
}
