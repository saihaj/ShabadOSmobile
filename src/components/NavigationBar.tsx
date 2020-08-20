import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet, View, Image, TouchableOpacity, TabBarIOS } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { FooterTab, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import logo from '../../assets/logo.png'

type NavigationBarProps = {
  navigation: StackNavigationProp<>;
}

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
    paddingTop: '5%',
    paddingBottom: '6%',
  },
  navigationIconSpacing: {
    paddingRight: 30,
    paddingLeft: 30,
  },
  navigationPanelButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
} )

const Buttons = [
  [ 'history', 'WIP' ],
  [ 'bookmark', 'WIP' ],
  [ 'search', 'Search' ],
  [ 'square-stack', 'GurbaniView' ],
  [ 'ellipsis-h', 'WIP' ],
]

const NavigationBar: React.FC<NavigationBarProps> = ( { navigation } ) => {
  const renderNavigationHeader = () => (
    <View style={styles.navigationPanelHeader}>
      <View style={styles.navigationPanelHandle} />

      <View style={styles.navigationPanelIconContainer}>

        {Buttons.map( ( [ iconName, destination ] ) => (
          <View key={iconName} style={styles.navigationIconSpacing}>
            <TabBarIOS>
              <Icon.TabBarItemIOS
                name={iconName}
                size={20}
                color="rgb(47,124,246)"
                onPress={() => navigation.navigate( destination )}
              />
            </TabBarIOS>
          </View>
        ) )}
      </View>

    </View>
  )

  const renderNavigationContent = () => (
    <View style={styles.navigationPanel}>
      <View style={styles.navigationPanelButtonContainer}>
        <Icon name="arrow-left" />
        <TouchableOpacity activeOpacity={0.5}>
          <Image style={{ width: 50, height: 50 }} source={logo} />
        </TouchableOpacity>
        <Icon name="arrow-right" />
      </View>
    </View>
  )

  return (
    <BottomSheet
      snapPoints={[ 150, 90, 90 ]}
      renderContent={renderNavigationContent}
      renderHeader={renderNavigationHeader}
      initialSnap={1}
    />
  )
}

export default NavigationBar
