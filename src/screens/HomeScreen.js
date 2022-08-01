import React, {useState} from 'react'
import {View, SafeAreaView} from 'react-native'

import tw from 'tailwind-react-native-classnames'
import ActionCard from '../components/ActionCard'
import Header from '../components/Header'

const HomeScreen = () => {
  const [security, setSecurity] = useState(false)
  const [bulb, setBulb] = useState(false)
  const [snap, setSnap] = useState(true)
  const [info, setInfo] = useState(true)

  return (
    <View style={tw`flex flex-1 bg-white items-center`}>
      <Header />
      {/* <ActionCard /> */}
      <SafeAreaView style={tw`flex-1 justify-center`}>
        <View style={tw`flex flex-row flex-wrap justify-around`}>
          <ActionCard
            icon={'home'}
            text={'Activate Security'}
            status={security}
            setStatus={setSecurity}
            navigationScreen={'ActivateSecurity'}
          />
          <ActionCard
            icon={'lightbulb'}
            text={'Control Bulb'}
            status={bulb}
            setStatus={setBulb}
          />
          <ActionCard
            icon={'camera'}
            text={'Snapshot'}
            status={snap}
            setStatus={setSnap}
            navigationScreen={'GetSnapshot'}
          />
          <ActionCard
            icon={'info-circle'}
            text={'Device Info'}
            status={info}
            setStatus={setInfo}
            navigationScreen={'DeviceInfo'}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
