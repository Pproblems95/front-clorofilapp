import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';

const NewPlant = () => {
  

  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [usePhotoTaken, SetUsePhotoTaken] = useState(false)

  useEffect(() => {
    console.log(usePhotoTaken)
    console.log('me ejecuto')
    if(photo===null){
      console.log('photo null')
      return
    }
    if(!usePhotoTaken){
      console.log('usephototaken false')
      return
    }
    const encoded = encodeURIComponent(photo)
    router.push({pathname: 'infoNewPlant', params:{
      photoTaken: encoded
    }})
  },[usePhotoTaken])
  useEffect(() => {
    SetUsePhotoTaken(false)
  }, [])

  if (!permission) {
    return (
      <View>
        <Text>Permisos cargando...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Necesitamos tu permiso para usar la cámara</Text>
        <Button onPress={requestPermission} title="Otorgar permiso" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log('Foto tomada:', photo.uri);
        setPhoto(photo.uri);
      } catch (error) {
        console.error('Error al tomar foto:', error);
      }
    }
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.previewImage} />
          <View className='flex-row '>
          <Pressable
      onPress={() => {
        setPhoto(null);
        SetUsePhotoTaken(false);
      }}
      className="bg-[#99CC66] px-5 py-2 rounded-lg mx-2 active:opacity-70"
    >
      <Text className="text-white font-medium text-center">Volver a la cámara</Text>
    </Pressable>

    {!usePhotoTaken && (
      <Pressable
        onPress={() => SetUsePhotoTaken(true)}
        className="bg-[#4CAF50] px-5 py-2 rounded-lg mx-2 active:opacity-70"
      >
        <Text className="text-white font-medium text-center">Usar esta foto</Text>
      </Pressable>
    )}
          </View>
          
        </View>
      ) : (
        <CameraView 
          style={styles.camera}
          facing={facing}
          ref={cameraRef}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Cambiar cámara</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <Text style={styles.text}>Tomar foto</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  captureButton: {
    padding: 15,
    backgroundColor: '#99CC66',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default NewPlant;