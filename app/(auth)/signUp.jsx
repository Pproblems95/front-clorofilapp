import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'

const signUp = () => {
    const [registerCredentials, SetRegisterCredentials] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })
    const [validatePassword, SetValidatePassword] = useState('')
    const [passwordsAreEqual, SetPasswordsAreEqual] = useState(false)
    const [checked, SetChecked] = useState(false)

    useEffect(() => {
        if(validatePassword === registerCredentials.password){
            SetPasswordsAreEqual(true)
        }
    }, [validatePassword, registerCredentials.password])
  return (
    <View className='bg-[#CAE4C5] flex-1 content-center items-center'>
      <View className= 'mx-12 mt-16'>
        <View className= ''>
            <Text className='text-xl'>Nombre</Text>
                <TextInput className='bg-white  rounded-md border' value={registerCredentials.name} onChangeText={(text) => {SetRegisterCredentials({
                ...registerCredentials,
                name: text
                })}} placeholder='Ingresa tu nombre'/> 
        </View>
        <View className='mt-5'>
            <Text className='text-xl'>Nombre de usuario</Text>
                <TextInput className='bg-white  rounded-md border' value={registerCredentials.username} onChangeText={(text) => {SetRegisterCredentials({
                ...registerCredentials,
                username: text
                })}} placeholder='Ingresa tu nuevo nombre de usuario'/> 
        </View>
        <View className='mt-5'>
            <Text className='text-xl'>Correo</Text>
                <TextInput className='bg-white  rounded-md border' value={registerCredentials.email} onChangeText={(text) => {SetRegisterCredentials({
                ...registerCredentials,
                email: text
                })}} placeholder='Ingresa tu correo'/> 
        </View>
        <View className='mt-5'>
            <Text className='text-xl'>Contraseña</Text>
                <TextInput className='bg-white  rounded-md border' value={registerCredentials.password} onChangeText={(text) => {SetRegisterCredentials({
                ...registerCredentials,
                password: text
                })}} placeholder='Ingresa tu contraseña'/> 
        </View>
        <View className='mt-5'>
            <Text className='text-xl'>Confirmar contraseña</Text>
                <TextInput className='bg-white  rounded-md border' value={validatePassword} onChangeText={(text) => {SetValidatePassword(text)}} placeholder='Confirma tu contraseña'/> 
        </View>
        <View className='flex-row mt-5'>
            <View>
            <Pressable onPress={() => SetChecked(!checked)} className="flex-row items-center space-x-2 p-4">
                <View className={`h-6 w-6 rounded border-2 ${checked ? 'bg-blue-500' : 'bg-white'}`} />
                <Text>Estoy de acuerdo con los términos y condiciones</Text>
             </Pressable>
            </View>
        </View>
        <View>
            <Text className='text-center text-blue-500 underline'>Términos y condiciones</Text>
        </View>
        <View>
            <Pressable className='mt-12' onPress={() => {router.navigate('../')}}>
                <View className='bg-[#99CC66] rounded-md'>
                    <Text className='text-xl py-2  text-center px-12 text-bold'>Regístrarme</Text>
                </View>
            </Pressable>
        </View>
      </View>
    </View>
  )
}

export default signUp

const styles = StyleSheet.create({})