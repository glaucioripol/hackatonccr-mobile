import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

interface IProps {
  children: React.ReactChildren | React.ReactChildren[] | JSX.Element | JSX.Element[]
}
export const Card: React.FC<IProps> = ({ children }: IProps) => <View style={styles.container}>{children}</View>
