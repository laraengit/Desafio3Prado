import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'

const Home = () => {
  return (
    <View>
      <Cabecera/> 
      <BotonPropio
            nombre={"Mis plantas"}
            colorFondo={"#5DC966"}
            onPress={() => {console.log("Mis plantas")}}
            />
        <BotonPropio
            nombre={"+ Info"}
            colorFondo={"#5DC966"}
            onPress={() => {console.log("+ info")}}
            />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})