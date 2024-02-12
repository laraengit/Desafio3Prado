/* import { StatusBar } from 'expo-status-bar'; */
import { useState } from 'react';
import uuid from 'react-native-uuid'
import { Modal,StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import ModalBorrarTarea from './src/components/ModalBorrarTarea';
import AgregarTarea from './src/components/AgregarTarea';
import ListaTareas from './src/components/ListaTareas';
import Cabecera from './src/components/Cabecera';

const  App = () => {
  const screenWidth = Dimensions.get('window').width
  const screenHeigth = Dimensions.get('window').height
  const [modalVisible, setModalVisible] = useState(false);
  const [tareaSelect, setTareaSelect] = useState({})
  const [tareaTitle,setTitle] = useState("")
  const [tareaDesc,setDesc] = useState("")
  const [arrTarea,setArrTarea] = useState([])
  const agregarTarea = () =>{
    const nuevaTarea = {
      id : uuid.v4(),
      titulo : tareaTitle,
      descripcion : tareaDesc,
      completed:false,
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
    }
    setArrTarea([...arrTarea,nuevaTarea])
    setTitle("")
    setDesc("")
    console.log(arrTarea)
  }
  const onHandlerTitle = (t) =>{
    setTitle(t)

  }
  const onHandlerDesc = (d) =>{
    setDesc(d)
  }
  const onHandlerModal = (tarea) =>{
    setTareaSelect(tarea)
    setModalVisible(!modalVisible)
    
  }
  const borrarTarea = () =>{
    setArrTarea(arrTarea.filter(tareita => tareita.id != tareaSelect.id))
    setModalVisible(!modalVisible)
  }

  const completeTask = (id) => {
    setArrTarea(arrTarea.map(tarea => {
      if(tarea.id===id) return {...tarea,completed:!tarea.completed}
    }))
  }

  return (
    <View style={styles.container}>
      {/* <Text style = {styles.text} >Hola, Coder! Esta es mi primera entrega. </Text>
        {/* <StatusBar style="auto" /> */} 
      <Cabecera/>
      <AgregarTarea
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
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAF0E6',
    alignItems: 'center',
    justifyContent: "flex-start",
    gap:10,

  },
  
  
});
