import React, { useState, useEffect } from 'react'
import { View, Text, Alert, Image } from 'react-native'

import { MyModal } from '../../components'

import { styles } from './styles'

import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import { FontAwesome as Icon } from '@expo/vector-icons'

export const MapScreen: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])

  // get location
  useEffect(getUserLocation, [])
  function getUserLocation() {
    loadPosition()
  }

  async function loadPosition() {
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      // refatorar
      Alert.alert('Oooops...', 'Precisamos da sua permissão para obter sua localização')
      return
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync()
    setInitialPosition([latitude, longitude]) // ta pegando errado no emulador
    // setInitialPosition([-19.9434317, -44.1055362])
  }

  return (
    <View style={styles.container}>
      <Text>go maps</Text>

      <View style={styles.mapContainer}>
        {initialPosition[0] !== 0 && (
          <MapView
            style={styles.map}
            loadingEnabled={initialPosition[0] === 0}
            initialRegion={{
              latitude: initialPosition[0],
              longitude: initialPosition[1],
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}>
            <Marker coordinate={{ latitude: initialPosition[0], longitude: initialPosition[1] }}>
              <Text style={{ color: '#04A2BC' }}>Eu</Text>
              <Icon name="truck" size={40} color="#04A2BC" />
            </Marker>

            <Marker
              onPress={() => {
                alert('bem vindo a casa do caralho')
              }}
              // -19.9434317, -44.1055362
              coordinate={{ latitude: -19.95, longitude: -44.1055362 }}>
              <View style={[styles.mapMarkerContainer, { display: 'flex' }]}>
                <Image
                  style={styles.mapMarkerImage}
                  source={{
                    uri: 'https://img.elo7.com.br/product/zoom/1C0B06B/adesivos-qualquer-personagem-adesivo.jpg',
                  }}
                />
                <Text style={styles.mapMarkerTitle}>butequin file1</Text>
              </View>
            </Marker>

            <Marker
              onPress={() => {
                alert('bem vindo a casa do caralho')
              }}
              // -19.9434317, -44.1055362
              coordinate={{ latitude: -19.97, longitude: -44.1055362 }}>
              <View style={[styles.mapMarkerContainer, { display: 'flex' }]}>
                <Image
                  style={styles.mapMarkerImage}
                  source={{
                    uri: 'https://img.elo7.com.br/product/zoom/1C0B06B/adesivos-qualquer-personagem-adesivo.jpg',
                  }}
                />
                <Text style={styles.mapMarkerTitle}>butequin file2</Text>
              </View>
            </Marker>

            <Marker
              onPress={() => {
                alert('bem vindo a casa do caralho')
              }}
              // -19.9434317, -44.1055362
              coordinate={{ latitude: -19.987, longitude: -44.1055362 }}>
              <View style={[styles.mapMarkerContainer, { display: 'flex' }]}>
                <Image
                  style={styles.mapMarkerImage}
                  source={{
                    uri: 'https://img.elo7.com.br/product/zoom/1C0B06B/adesivos-qualquer-personagem-adesivo.jpg',
                  }}
                />
                <Text style={styles.mapMarkerTitle}>butequin file4</Text>
              </View>
            </Marker>

            <Marker
              onPress={() => {
                alert('bem vindo a casa do caralho')
              }}
              // -19.9434317, -44.1055362
              coordinate={{ latitude: -20, longitude: -44.1055362 }}>
              <View style={[styles.mapMarkerContainer, { display: 'flex' }]}>
                <Image
                  style={styles.mapMarkerImage}
                  source={{
                    uri: 'https://img.elo7.com.br/product/zoom/1C0B06B/adesivos-qualquer-personagem-adesivo.jpg',
                  }}
                />
                <Text style={styles.mapMarkerTitle}>butequin file4</Text>
              </View>
            </Marker>

            {/*points.map(({ id, latitude, longitude, image_url, name }) => (
              <Marker key={id.toString()} onPress={handleOnPressToDetail(id)} coordinate={{ latitude, longitude }}>
                <View style={styles.mapMarkerContainer}>
                  <Image
                    style={styles.mapMarkerImage}
                    source={{
                      uri: 'https://img.elo7.com.br/product/zoom/1C0B06B/adesivos-qualquer-personagem-adesivo.jpg',
                    }}
                  />
                  <Text style={styles.mapMarkerTitle}>{name}</Text>
                </View>
              </Marker>
                  )) */}
          </MapView>
        )}
      </View>
    </View>
  )
}
