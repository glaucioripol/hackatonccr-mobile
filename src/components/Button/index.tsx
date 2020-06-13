import React from 'react'
import { TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface IProps {
  onPressButton(): void
}
export const RadiusButton: React.FC<IProps> = ({ children, onPressButton }) => (
  <TouchableOpacity style={styles.buttonRadius} onPress={onPressButton}>
    {children}
  </TouchableOpacity>
)
