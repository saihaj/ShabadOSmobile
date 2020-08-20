import React, { createContext } from 'react'
import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { Container, Header, Content, List, ListItem, Text } from 'native-base'

import SearchScreen from './screens/SearchScreen'
import HomeScreen from './screens/HomeScreen'
import GurbaniView from './screens/GurbaniView'

import schema from './models/Schema'
import { dbModels } from './models/Index'
import DataManager from './screens/DataManager'

const adapter = new SQLiteAdapter( {
  dbName: 'ShabadOS',
  schema,
} )
export const database = new Database( {
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
} )
export const DatabaseContext = createContext( database )
export const { Provider, Consumer } = DatabaseContext

const Drawer = createDrawerNavigator()

const App = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
)

const DrawerContent = ( props: any ) => {
  const goTo = ( destination: string ) => {
    props.navigation.dispatch( DrawerActions.jumpTo( destination ) )
  }
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem>
            <Text onPress={() => goTo( 'Home' )}>Home</Text>
          </ListItem>
          <ListItem>
            <Text onPress={() => goTo( 'Search' )}>Search</Text>
          </ListItem>
          <ListItem>
            <Text onPress={() => goTo( 'DataManager' )}>DataManager</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

const RootNavigator = () => (
  <Drawer.Navigator drawerContent={( props ) => DrawerContent( props )}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Search" component={SearchScreen} />
    <Drawer.Screen name="GurbaniView" component={GurbaniView} />
    <Drawer.Screen name="DataManager" component={DataManager} />
  </Drawer.Navigator>
)

export default App
