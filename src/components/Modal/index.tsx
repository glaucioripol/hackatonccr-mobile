import React from 'react'
import { View, Modal } from 'react-native'

import { styles } from './styles'

interface IProps {
  modalIsVisible: boolean
}
export const MyModal: React.FC<IProps> = ({ children, modalIsVisible }) => (
  <Modal animationType="slide" transparent={true} visible={modalIsVisible} onRequestClose={() => {}}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>{children}</View>
    </View>
  </Modal>
)
