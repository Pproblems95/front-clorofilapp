import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='[idPlanta]' options={{title:'Mis Plantas', headerShown:true, headerStyle:{backgroundColor:'#99CC66'}, headerTitleStyle:{
        fontSize:30,
        color:'black'
      }, headerTitleAlign:'center'}}/>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})