import React from 'react'
import { Alert, Modal, StyleSheet, Text, View, ModalProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import useToggle from '../../hooks/use-toggle'
import Colours from '../../themes/colours'
import { mx } from '../../themes/utils'

const debugBorder = {
  borderWidth: 2,
  borderColor: 'black',
}

const styles = StyleSheet.create( {
  applyButton: {
    marginLeft: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    ...mx( 20 ),
    padding: 25,
    borderRadius: 10,
    backgroundColor: Colours.MediumGray,
  },
  textStyle: {
    fontWeight: '500',
    color: Colours.Blue,
  },
} )

type OptionsModalProps = {
  /**
    * Determines whether your modal is visible.
    */
  visible: NonNullable<ModalProps['visible']>,
  /**
   * onPress event to close the modal
   */
  closeModal: () => void,
}

const OptionsModal = ( { visible, closeModal }:OptionsModalProps ) => {
  const applySettings = () => {
    closeModal()
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => Alert.alert( 'Search options closed.' )}
    >

      <View style={styles.centeredView}>

        <View style={styles.modalView}>

          <Text style={styles.modalText}>Coming Soon</Text>

          <View style={styles.modalOptions}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.textStyle}>CANCEL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyButton} onPress={applySettings}>
              <Text style={styles.textStyle}>APPLY</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </Modal>
  )
}

const Options = () => {
  const { state, toggle } = useToggle( false )

  return (
    <View style={styles.centeredView}>

      <OptionsModal visible={state} closeModal={toggle} />

      <TouchableOpacity onPress={toggle}>
        <Text style={styles.textStyle}>Options</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Options
