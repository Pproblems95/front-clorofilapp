import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'

const infoNewPlant = () => {
  const { photoTaken } = useLocalSearchParams()

  return (
    <ScrollView className='flex-1 bg-[#CAE4C5]'>
      <View className='flex-1 bg-white items-center m-5  rounded-md'>
        <Image source={{uri: photoTaken}} className='w-52 h-52 rounded-md my-10' resizeMode='contain'/>
        <Text className='text-xl m-10'>Hola soy un texto de pajisimaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        
      </View>
      <View className='flex-row flex-1 '>
          <Pressable onPress={()=>{ router.navigate("newPlant") }}>
            <View className='bg-[#99CC66] mx-5 rounded-md'>
              <Text className='py-2 px-2 text-center text-xl'>Tomar de nuevo</Text>
            </View>
          </Pressable>
          <Pressable>
            <View className='bg-[#99CC66] mx-5 rounded-md'>
              <Text className='py-2 px-2 text-center text-xl'>Guardar planta</Text>
            </View>
          </Pressable>
        </View>
    </ScrollView>
    
  )
}

export default infoNewPlant

const styles = StyleSheet.create({})