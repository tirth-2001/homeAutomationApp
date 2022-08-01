import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import ToggleSwitch from 'toggle-switch-react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {useNavigation} from '@react-navigation/native'
import {BackendService} from '../services'

const ActivateSecurity = () => {
  const navigation = useNavigation()
  const [isEnabled, setIsEnabled] = useState()

  const updateStatus = async () => {
    const response = await BackendService.updateSecurityStatus()
    console.log(response.data)
    setIsEnabled(response.data.status)
  }

  const fetchStatus = async () => {
    const {status} = await BackendService.getSecurityStatus()
    setIsEnabled(status)
  }

  useEffect(() => {
    fetchStatus()
  }, [])

  return (
    <View
      style={tw.style(
        'bg-gray-700',
        isEnabled && 'bg-yellow-400',

        'flex-1',
        'flex',
        'items-center',
        'justify-center',
      )}>
      <View style={tw`absolute top-5 left-5`}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              style={tw.style('text-white', isEnabled && 'text-yellow-800')}
              name="arrow-left"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>

      <ToggleSwitch
        style={tw`shadow-lg`}
        isOn={isEnabled}
        onColor="#92400E"
        offColor="#D1D5DB"
        size="large"
        onToggle={updateStatus}
      />
      <Text
        style={tw.style(
          'text-white',
          isEnabled && 'text-yellow-800',
          'mt-4',
          'text-xl',
          'font-bold',
        )}>
        {isEnabled ? 'Security ON' : 'Security OFF'}
      </Text>
    </View>
  )
}

export default ActivateSecurity
