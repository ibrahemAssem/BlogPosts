import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from './src/screens/indexScreen'
import {Provider} from './src/context/BlogContext'
import showScreen from './src/screens/showScreen'
import createScreen from './src/screens/createScreen'
import editScreen from './src/screens/EditScreen'


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: showScreen,
  Create:createScreen,
  Edit:editScreen

}, {
  initialRouteName:'Index',
  defaultNavigationOptions: {
    title:'Blogs'
  }
})

const App= createAppContainer(navigator)

export default () => {
  return <Provider>
  <App/>
  </Provider>
}