import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UserIcon } from '../../assets/icons'
import { router } from 'expo-router'
//importar logo de perfil

const perfil = () => {
  return (
    <View className='flex-1 bg-[#CAE4C5]'>
      <View className='bg-white rounded-full mx-10 mb-5 mt-10 items-center justify-center flex-1'>
        <UserIcon className='pt-10 flex-1' size={200}/>
      </View>
      <View className='flex-1'>
        <Text className='text-center text-bold text-3xl'>Public Name</Text>
        <Text className='text-center text-bold text-xl'>@Username</Text>
        <Pressable>
          <View className='my-3 rounded-xl bg-white mx-10'>
            <Text className='text-center text-2xl py-2 px-10 '>Editar Perfil</Text>
          </View>
        </Pressable>
        <Pressable>
          <View className='my-3 rounded-xl bg-white mx-10'>
            <Text className='text-center text-2xl py-2 px-10 '>Ajustes</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {router.replace('/')}}>
          <View className='my-3 rounded-xl bg-red-400 mx-10'>
            <Text className='text-center text-2xl py-2 px-10 '>Cerrar sesión</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default perfil

const styles = StyleSheet.create({})