import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { primaryColor, secondaryColor } from '../../common/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    height: '100%',
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 24,
    paddingVertical: 28,
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

  textWithColor: {
    color: primaryColor,
  },

  textBold: {
    fontWeight: 'bold',
  },

  contentCard: {
    height: '80%',
    justifyContent: 'space-between',
  },
  containerContentText: {
    alignSelf: 'flex-end',
  },
  cetralizeText: {
    textAlign: 'center',
  },
})
