import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Components
import HomeScreen from './screens/HomeScreen'
import ActivateSecurity from './screens/ActivateSecurity'
import GetSnapshot from './screens/GetSnapshot'
import DeviceInfo from './screens/DeviceInfo'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{header: () => null}}
          initialRouteName={'HomeScreen'}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ActivateSecurity" component={ActivateSecurity} />
          <Stack.Screen name="GetSnapshot" component={GetSnapshot} />
          <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes
