import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack options={{headerShown:false}}>
        <Stack.Screen name='(auth)' options={{headerShown:false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        <Stack.Screen name='(screens)' options={{headerShown:false}}/>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})