import React, { FunctionComponent } from 'react'
import { Text, Container, Content } from 'native-base'
import { StyleSheet, View, Image } from 'react-native'

import NavigationBar from '../components/NavigationBar'

import logo from '../../assets/logo.png'

type HomeSreenProps = { }

const styles = StyleSheet.create( {
  welcomeContent: {
    alignItems: 'center',
  },
  welcomeLogo: {
    width: '30%',
    height: 100,
    marginTop: '5%',
    marginBottom: '5%',
  },
} )

const HomeScreen: FunctionComponent<HomeSreenProps> = ( props ) => (
  <Container>
    <Content>
      <View style={styles.welcomeContent}>
        <Image
          style={styles.welcomeLogo}
          source={logo}
        />
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Shabad OS</Text>
      </View>
    </Content>
    <NavigationBar {...props} />
  </Container>
)

export default HomeScreen
