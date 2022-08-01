import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Header from '../components/Header'
import {BackendService} from '../services'

import cctv from '../assets/cctv.jpg'
import {useNavigation} from '@react-navigation/native'

import ImageViewer from 'react-native-image-zoom-viewer'

const GetSnapshot = () => {
  const navigation = useNavigation()
  const [snaps, setSnaps] = useState([])
  const userWidth = Dimensions.get('window').width
  const userHeight = Dimensions.get('window').height

  const images = [
    {
      // Simplest usage.
      url: 'https://picsum.photos/401/201',
      width: userWidth * 0.45,
      height: userHeight * 0.2,
    },
    {
      url: 'https://picsum.photos/405/206',
      width: userWidth * 0.4,
      height: userHeight * 0.18,
    },
    {
      url: 'https://picsum.photos/407/207',
      width: userWidth * 0.35,
      height: userHeight * 0.16,
    },
    {
      url: 'https://picsum.photos/408/208',
      width: userWidth * 0.3,
      height: userHeight * 0.14,
    },
  ]

  const getSnap = async () => {
    const response = await BackendService.getSnapshot()
    setSnaps(response.data)
    console.log('snap', response.data)
  }

  useEffect(() => {
    getSnap()
  }, [])

  return (
    <View style={tw.style('bg-white flex-1 flex items-center')}>
      <Header name="Security Snapshots" />
      <View>
        <Text style={tw.style('text-gray-600 text-lg mb-2')}>Latest Snap</Text>

        <Image
          source={{uri: snaps?.slice(-1)[0]}}
          style={{
            width: userWidth * 0.8,
            height: userHeight * 0.3,
            borderRadius: 15,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={getSnap}
        style={tw.style('bg-blue-500 px-6 py-2 my-3 rounded-md shadow-md')}>
        <Text style={tw.style('text-white text-lg')}>Get Snapshot</Text>
      </TouchableOpacity>

      <Text style={tw.style('text-gray-600 text-lg font-bold mt-2 text-left')}>
        Previous Snaps
      </Text>

      <View style={{height: 250}}>
        <FlatList
          style={tw`mt-8 mx-2 flex flex-1`}
          data={snaps.slice(0, -1).reverse()}
          ItemSeparatorComponent={() => <View style={tw`mx-2`} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              style={[
                tw.style('rounded-2xl'),
                {
                  width: Dimensions.get('window').width * 0.85,
                  height: 200,
                },
              ]}
            />
          )}
        />
      </View>

      {/* <View style={tw.style('mt-4 flex flex-row flex-wrap items-center')}>
        {images.map((image, index) => (
          
          <Image
            key={index}
            source={{uri: image.url}}
            style={{
              height: image.height,
              width: image.width,
              borderRadius: 15,
              marginHorizontal: 5,
              marginVertical: 5,
            }}
          />
        ))}
      </View> */}

      {/* <Modal visible={true} transparent={true}>
        <ImageViewer imageUrls={images} />
      </Modal> */}
    </View>
  )
}

export default GetSnapshot
