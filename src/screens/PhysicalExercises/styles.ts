import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { secondaryColor } from '../../common/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },

  cardContent: {
    height: '100%',
  },
  cardTitle: {
    fontSize: 16,
    color: '#717171',
    textAlign: 'center',
  },

  divider: {
    marginTop: 20,
  },

  spaceTopFistButton: { marginTop: 45 },

  containerContentButton: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  contentText: {
    justifyContent: 'center',
    width: '80%',
  },
  contentTextAdjust: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
  },
})
