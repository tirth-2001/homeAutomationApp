import React from 'react'
import {View, Text} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Icon from 'react-native-vector-icons/FontAwesome5'

const DetailsCard = ({icon, color, label, value}) => {
  return (
    <View
      style={tw`w-full h-20 rounded-lg bg-white shadow-lg flex flex-row items-center mb-8 pl-4`}>
      <View
        style={tw.style(
          'rounded-full',
          'h-11',
          'w-11',
          'items-center',
          'justify-center',
          {
            backgroundColor: color,
          },
        )}>
        <Icon name={icon} size={24} color={'white'} />
      </View>
      <View style={tw`flex flex-col`}>
        <Text
          style={tw.style('text-2xl', 'font-bold', 'pl-4', {
            color: color,
          })}>
          {label}
        </Text>
        <Text style={tw`text-gray-600 text-lg pl-4`}>{value}</Text>
      </View>
    </View>
  )
}

export default DetailsCard
