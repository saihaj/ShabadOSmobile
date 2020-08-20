import React, { FunctionComponent } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Container, View, Text, Content } from 'native-base'

import NavigationBar from '../components/NavigationBar'

import shabadData from '../mock/shabad.json'

type GurbaniViewScreen = { };

const styles = StyleSheet.create( {
  title: {
    backgroundColor: 'rgb(235,235,235)',
    paddingTop: '6%',
    paddingStart: '5%',
    paddingEnd: '2%',
    paddingBottom: '2%',
  },
  titleText: {
    fontFamily: 'OpenGurbaniAkhar-Black',
    fontSize: 35,
    fontWeight: 'bold',
  },
  content: {
    paddingTop: '2%',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  contentTextGurmukhi: {
    fontSize: 30,
  },
  contentTextGurmukhiTranslation: {
    fontSize: 15,
  },
  contentTextEnglishTranslation: {
    paddingTop: '2%',
    fontSize: 15,
    paddingBottom: '5%',
  },
} )

// console.log( shabadData.shabad[ 0 ].line.gurmukhi.unicode )
const GurbaniViewScreen: FunctionComponent<GurbaniViewScreen> = ( props ) => (
  <Container>
    <SafeAreaView style={styles.title} />
    <Content>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          imlu myry pRIqmw jIau quDu ibnu KrI inmwxI ]
        </Text>
      </View>
      <View style={styles.content}>
        {shabadData.shabad.map( ( { line: { id, gurmukhi, translation } } ) => (
          <View key={id}>
            <Text style={styles.contentTextGurmukhi}>
              {gurmukhi.unicode}
            </Text>
            <Text style={styles.contentTextGurmukhiTranslation}>
              {translation.punjabi.default.unicode}
            </Text>
            <Text style={styles.contentTextEnglishTranslation}>
              {translation.english.default}
            </Text>
          </View>
        ) )}
      </View>
    </Content>
    <NavigationBar {...props}/>
  </Container>
)
export default GurbaniViewScreen
