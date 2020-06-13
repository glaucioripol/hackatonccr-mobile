import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { primaryColor, secondaryColor } from '../../common/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },

  textWithColor: {
    color: primaryColor,
  },
})
