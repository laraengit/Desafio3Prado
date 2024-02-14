import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'

const ItemScreen = ({setItemScreen}) => {
  return (
    <View>
      <Cabecera/>
      <BotonPropio
            nombre={"Atrás"}
            colorFondo={"#5DC966"}
            onPress={() => {setItemScreen(false)}}
            />
      <Text>Hola</Text>

    </View>
  )
}

export default ItemScreen

const styles = StyleSheet.create({})