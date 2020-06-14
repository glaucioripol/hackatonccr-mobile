import { StyleSheet } from 'react-native'

import { primaryColor } from '../../../common/colors'

export const styles = StyleSheet.create({
  containerGender: {
    marginTop: 24,
  },
  containerOptionGendersContents: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerOptionGenders: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionsItemGender: {
    padding: 8,
    borderWidth: 2,
    width: 64,
    height: 64,
    borderRadius: 8,
    borderColor: primaryColor,
  },
  haveNext: {
    marginRight: 26,
  },
  optionsItemGenderSelected: {
    backgroundColor: primaryColor,
  },

  textWithColor: {
    color: primaryColor,
  },
})
