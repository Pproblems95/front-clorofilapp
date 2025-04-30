import { Image, ScrollView, StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'

const idPlanta = () => {
  const { plantData } = useLocalSearchParams()
  const details = JSON.parse(plantData)
  return (
    <ScrollView className='flex-1 bg-[#CAE4C5]'>
      <Stack.Screen options={{title:details.name}}/>
      <View className='bg-white m-5 items-center flex-1 rounded-md min-h-full'>
        <Image source={details.photo} className='w-52, h-52 my-12 rounded-md ' resizeMode='contain'/>
        <Text className='text-center text-lg my-5' flex-1 >{details.description}</Text>
      </View>
    </ScrollView>
    
  )
}

export default idPlanta

const styles = StyleSheet.create({})