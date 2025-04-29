import { Dimensions, Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

const index = () => {
  const height = Dimensions.get('window').height
  const [credentials, SetCredentials] = new useState({
    email: '',
    password:''
  })
  return (
    <View className='bg-[#CAE4C5] flex-1 content-center justify-center'>
      <View className='justify-center content-center'>
        <View className='flex my-5'>
          <Image source={require('../../assets/logo-removebg-preview.png')} className='h-52 w-52 self-center'/>
          <Text className='font-bold text-3xl text-center'>Clorofilapp</Text>
        </View>
        <View className=' mx-12 ' >
          <Text className='text-xl'>Correo</Text>
          <TextInput className='bg-white  rounded-md border' value={credentials.email} onChangeText={(text) => {SetCredentials({
            ...credentials,
            email: text
          })}} placeholder='Ingresa tu correo'/>  
        </View>
        <View className='mx-12 mt-10' >
          <Text className='text-xl'>Contraseña</Text>
          <TextInput className='bg-white rounded-md border' onChangeText={(text) => {SetCredentials({
            ...credentials,
            password: text
          })}} placeholder='Ingresa tu contraseña'/>  
        </View>
        <View className='my-10 items-center w-full'>
          <Pressable onPress={() => {router.navigate('misPlantas')}}>
            <View className='bg-[#99CC66] w-full rounded-lg '>
              <Text className='text-xl text-bold py-2 px-24 text-center'>Iniciar sesión</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Text className='text-lg text-center'>¿Nuevo en Clorofilapp?</Text>
          <Pressable onPress={() => {router.navigate('signUp')}}>
            <Text className='text-center text-lg underline'>Regístrate aquí</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})