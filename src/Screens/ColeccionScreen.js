import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import AgregarTareas from '../components/AgregarTarea'
import ListaTareas from '../components/ListaTareas'
import ModalBorrarTarea from '../components/ModalBorrarTarea'
/* Este screen es el análogo de cómo quedó la entrega 2 */
const ColeccionScreen = ({tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,agregarTarea, screenWidth,
    arrTarea,onHandlerModal, completeTask, screenHeigth, tareaSelect,borrarTarea,modalVisible}) => {
  return (
    <View>
      <Cabecera/>
      <AgregarTareas
        tareaTitle= {tareaTitle} 
        onHandlerTitle= {onHandlerTitle}
        tareaDesc= {tareaDesc} 
        onHandlerDesc= {onHandlerDesc}
        agregarTarea= {agregarTarea}
        screenWidth={screenWidth}
      
      />
       
      <ListaTareas
        arrTarea = {arrTarea}
        onHandlerModal = {onHandlerModal}
        completeTask={completeTask}
        screenWidth={screenWidth}
        screenHeigth = {screenHeigth}
      />
      
      
      <ModalBorrarTarea
        modalVisible = {modalVisible}
        tareaSelect = {tareaSelect}
        borrarTarea = {borrarTarea}
        onHandlerModal = {onHandlerModal}
      />
    </View>
  )
}

export default ColeccionScreen

const styles = StyleSheet.create({})