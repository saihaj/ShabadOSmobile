import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Button, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import BottomSheet from 'reanimated-bottom-sheet'

import logo from '../../assets/logo.png'

type NavigationBarProps = { }

const styles = StyleSheet.create( {
  navigationPanel: {
    height: '100%',
    backgroundColor: '#f9f9fa',
  },
  navigationPanelHeader: {
    backgroundColor: '#f9f9fa',
    shadowColor: '#000000',
    paddingTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  navigationPanelHandle: {
    width: 80,
    height: 2,
    borderRadius: 5,
    backgroundColor: '#00000040',
  },
  navigationPanelIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '6%',
    paddingBottom: '6%',
  },
  navigationPanelButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
} )

/**
 * Display an alert for WIP.
 */
const workInProg = () => {
  Alert.alert( ' 🚧 ', 'ਕੰਮ ਚੱਲ ਰਿਹਾ ਹੈ' )
}

class NavigationBar extends Component<NavigationBarProps> {
    renderNavigationHeader = () => (
      <View style={styles.navigationPanelHeader}>
        <View style={styles.navigationPanelHandle} />
        <View style={styles.navigationPanelIconContainer}>
          <View style={{ marginRight: '5%' }}>
            <Icon
              name="history"
              type="font-awesome"
              color="#3783F6"
              onPress={workInProg}
            />
          </View>
          <View style={{ marginRight: '5%', marginLeft: '5%' }}>
            <Icon
              name="bookmark"
              type="font-awesome"
              color="#3783F6"
              onPress={workInProg}
            />
          </View>
          <View style={{ marginRight: '5%', marginLeft: '5%' }}>
            <Icon
              name="search"
              type="font-awesome"
              color="#3783F6"
              onPress={workInProg}
            />
          </View>
          <View style={{ marginRight: '5%', marginLeft: '5%' }}>
            <Icon
              name="window-restore"
              type="font-awesome"
              color="#3783F6"
              onPress={workInProg}
            />
          </View>
          <View style={{ marginLeft: '5%' }}>
            <Icon
              name="ellipsis-h"
              type="font-awesome"
              color="#3783F6"
              onPress={workInProg}
            />
          </View>
        </View>
      </View>
    )

    renderNavigationContent = () => (
      <View style={styles.navigationPanel}>
        <View style={styles.navigationPanelButtonContainer}>
          <Button title="Prev" onPress={workInProg} />
          <TouchableOpacity activeOpacity={0.5}>
            <Image style={{ width: 50, height: 50 }} source={logo} />
          </TouchableOpacity>
          <Button title="Next" onPress={workInProg} />
        </View>
      </View>
    )

    render() {
      return (
        <BottomSheet
          snapPoints={[ 150, 90, 90 ]}
          renderContent={this.renderNavigationContent}
          renderHeader={this.renderNavigationHeader}
          initialSnap={1}
        />
      )
    }
}

export default NavigationBar
