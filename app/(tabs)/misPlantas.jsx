import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const misPlantas = () => {
    const plants = [
        {
          id: 0,
          name: 'Girasol',
          photo: require('../../assets/planta2.jpg'),
          description: 'El girasol necesita luz solar para crecer y se orienta hacia el sol durante el día.',
        },
        {
          id: 1,
          name: 'Menta',
          photo: require('../../assets/planta2.jpg'),
          description: 'La menta es una planta aromática usada en infusiones y como remedio natural para problemas digestivos.',
        },
        {
          id: 2,
          name: 'Aloe Vera',
          photo: require('../../assets/planta2.jpg'),
          description: 'El aloe vera tiene propiedades medicinales, especialmente para el cuidado de la piel.',
        },
        {
          id: 3,
          name: 'Lavanda',
          photo: require('../../assets/planta2.jpg'),
          description: 'La lavanda es conocida por su fragancia relajante y sus usos en aceites esenciales.',
        },
        {
          id: 4,
          name: 'Romero',
          photo: require('../../assets/planta2.jpg'),
          description: 'El romero es una planta aromática utilizada en la cocina y en tratamientos naturales.',
        },
        {
          id: 5,
          name: 'Cactus',
          photo: require('../../assets/planta2.jpg'),
          description: 'El cactus es una planta que retiene agua, ideal para ambientes secos y poco riego.',
        },
        {
          id: 6,
          name: 'Orquídea',
          photo: require('../../assets/planta2.jpg'),
          description: 'Las orquídeas son plantas ornamentales populares por sus flores exóticas y elegantes.',
        },
        {
          id: 7,
          name: 'Helecho',
          photo: require('../../assets/planta2.jpg'),
          description: 'Los helechos crecen bien en zonas húmedas y sombreadas, ideales para interiores.',
        },
        {
          id: 8,
          name: 'Bambú',
          photo: require('../../assets/planta2.jpg'),
          description: 'El bambú crece rápidamente y es símbolo de resistencia, usado también en decoración.',
        },
        {
          id: 9,
          name: 'Hierbabuena',
          photo: require('../../assets/planta2.jpg'),
          description: 'La hierbabuena se usa comúnmente en cocina, bebidas y remedios naturales.',
        }
      ];
      
      
  return (
    <View className='bg-[#CAE4C5] flex-1'>
      <FlatList 
        data={plants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <Pressable onPress={() => {
            const stringItem = JSON.stringify(item)

            router.push({
                pathname:'[id]',
                params:{id: item.id.toString(), plantData: stringItem}
            })
        }}>
            <View className='bg-white flex-row my-5 mx-5 items-center rounded-md p-4'>
                <Image source={item.photo} className='h-24 w-24 mr-4' resizeMode='contain'/>
                <View className='flex-1'>
                    <Text className='text-xl font-bold mb-2'>{item.name}</Text>
                    <Text className='text-gray-700'>{item.description}</Text>
                </View>
            </View>
        </Pressable>
        )}
        />
    </View>
  )
}

export default misPlantas

const styles = StyleSheet.create({})