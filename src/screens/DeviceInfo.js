import React, {useState} from 'react'
import {useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import DetailsCard from '../components/DetailsCard'
import Header from '../components/Header'
import {BackendService} from '../services'

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    temperature: 0,
  })

  const fetchDeviceInfo = async () => {
    BackendService.getTemp()
      .then(x => x.data)
      .then(setDeviceInfo)
  }

  useEffect(() => {
    const interval = setInterval(fetchDeviceInfo, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <View style={tw.style('flex-1 bg-white')}>
      <Header name="Device Info" />
      <View
        style={tw.style('bg-white flex-1 flex items-center justify-center')}>
        <View
          style={{
            width: Dimensions.get('window').width - 30,
            // height: Dimensions.height,
          }}>
          <DetailsCard
            icon={'thermometer-half'}
            color={'red'}
            label={'Temperature'}
            value={`${deviceInfo.temperature} °C`}
          />
          <DetailsCard
            icon={'map-marker-alt'}
            color={'blue'}
            label={'Location'}
            value={'A/103 XYZ'}
          />
          <DetailsCard
            icon={'battery-three-quarters'}
            color={'green'}
            label={'Battery'}
            value={'78 %'}
          />
          <DetailsCard
            icon={'user-alt'}
            color={'orange'}
            label={'Owner'}
            value={'John Doe'}
          />
        </View>
      </View>
    </View>
  )
}

export default DeviceInfo
