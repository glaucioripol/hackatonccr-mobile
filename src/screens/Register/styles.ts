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

  textDescribe: {
    textAlign: 'center',
  },

  spaceBetweenInputAndDescribe: {
    marginTop: 40,
  },

  spaceBetweenInputs: {
    marginTop: 24,
  },

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

  containerButton: {
    padding: 16,
  },
  containerContentButton: {
    flexDirection: 'row',
  },

  textButtonContainer: {
    flex: 0.9,
  },
  textButton: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconButton: {
    flex: 0.1,
  },
})
