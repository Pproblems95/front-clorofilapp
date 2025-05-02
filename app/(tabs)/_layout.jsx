import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MenuIcon, UserIcon, PlustIcon } from '../../assets/icons'

const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarStyle:{backgroundColor:'#99CC66',}, 
    tabBarActiveBackgroundColor:'#E9E6CA',
    tabBarActiveTintColor:'black',
    tabBarInactiveTintColor:'black'}}>
        <Tabs.Screen name='misPlantas' options={{title: 'Mis plantas', headerShown:true, headerStyle:{backgroundColor:'#99CC66'}, headerTitleStyle:{
        fontSize:30,
        color:'black'
      }, headerTitleAlign:'center', tabBarIcon: ({color}) => <MenuIcon color={color}/>}} />
      <Tabs.Screen name='newPlant' options={{title: 'Nueva planta', headerShown:true, headerStyle:{backgroundColor:'#99CC66'}, headerTitleStyle:{
        fontSize:30,
        color:'black'
      }, headerTitleAlign:'center', tabBarIcon: ({color}) => <PlustIcon color={color}/>}}/>
      <Tabs.Screen name='perfil' options={{title: 'Mi perfil', headerShown:true, headerStyle:{backgroundColor:'#99CC66'}, headerTitleStyle:{
        fontSize:30,
        color:'black'
      }, headerTitleAlign:'center', tabBarIcon: ({color}) => <UserIcon color={color} />}}/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})