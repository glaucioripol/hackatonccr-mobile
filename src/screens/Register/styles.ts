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
    marginTop: 10,
    textAlign: 'center',
  },

  spaceBetweenInputAndDescribe: {
    marginTop: 32,
  },

  spaceBetweenInputs: {
    marginTop: 24,
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
