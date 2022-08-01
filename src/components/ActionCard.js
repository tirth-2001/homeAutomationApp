import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import tw from 'tailwind-react-native-classnames'

import Icon from 'react-native-vector-icons/FontAwesome5'

import {useNavigation} from '@react-navigation/native'

import {BackendService} from '../services'

const ActionCard = ({icon, text, status, setStatus, navigationScreen}) => {
  const navigation = useNavigation()

  // Update Bulb Status
  const updateStatus = async () => {
    console.log('updating')
    const response = await BackendService.updateBulbStatus()
    console.log(response.data)
    setStatus(response.data.status)
  }

  return (
    <TouchableOpacity
      opacity={0.9}
      onPress={() => {
        if (text === 'Control Bulb') {
          updateStatus()
          return
        }

        !!navigationScreen && navigation.navigate(navigationScreen)
        setStatus(!status)
      }}>
      <View
        style={tw.style(
          'h-36',
          'w-36',
          'bg-white',
          status && 'bg-blue-500',
          'text-gray-700',
          'rounded-lg',
          'shadow-lg',
          'flex',
          'justify-evenly',
          'items-center',
          'mb-8',
        )}>
        <Icon
          name={icon}
          size={status ? 70 : 60}
          style={tw.style('text-blue-500', status && 'text-white')}
        />

        <Text
          style={tw.style(
            'text-gray-700',
            status && 'text-white',
            status && 'text-lg',
            status && 'font-bold',
          )}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ActionCard
