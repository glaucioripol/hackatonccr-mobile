import { StyleSheet } from 'react-native'

import { primaryColor, secondaryColor } from '../../common/colors'

export const styles = StyleSheet.create({
  label: {
    color: primaryColor,
  },

  input: {
    borderBottomWidth: 2,
  },
  inputInFocus: {
    borderBottomColor: primaryColor,
  },
  inputInBlur: {
    borderBottomColor: secondaryColor,
  },
})
