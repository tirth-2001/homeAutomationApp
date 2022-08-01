import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from '../assets/smart-house.png'

import tw from 'tailwind-react-native-classnames'

import {useNavigation} from '@react-navigation/native'

const Header = ({name}) => {
  const navigation = useNavigation()

  return (
    <View
      style={tw`h-16 w-full bg-white flex flex-row items-center pl-4 pt-2 pb-2 mb-4 shadow-lg`}>
      {name ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={tw.style('text-gray-500')} name="arrow-left" size={25} />
        </TouchableOpacity>
      ) : (
        <Image style={tw`h-12 w-12`} source={Logo} />
      )}
      <Text
        style={tw.style(
          'text-blue-500',
          !!name && 'text-gray-500',
          'text-2xl',
          'font-bold',
          'pl-4',
        )}>
        {name ? name : 'Smart Home'}
      </Text>
    </View>
  )
}

export default Header
