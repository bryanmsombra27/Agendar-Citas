import React, { useState} from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight } from 'react-native'; //

import Cita from "./componentes/cita";
import Formulario from "./componentes/formulario";
// view es similar a un div

const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(false);

  //Definir el state de citas  
  const [citas, setCitas] = useState([


  ]);

  //eliminar  los pacientes
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    })
  };
  //muestra u ooculta el formulario   
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm)
  }
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

       <View>
                <TouchableHighlight onPress={()=>mostrarFormulario()} style={styles.btnMostrar} >
                    <Text style={styles.textoMostrar}>Realizar Cita</Text>
                </TouchableHighlight>         
        </View>

      <View style={styles.contenido}>
        {mostrarForm ? (
          <>
            <Text style={styles.titulo}>Crear Nueva Cita</Text>
            <Formulario citas={citas} setCitas={setCitas} guardarMostrarForm={ guardarMostrarForm}/>
            </>
        ) : (
            <>
      <Text style={styles.titulo}>{citas.length> 0 ? "Administra tus Citas":"No hay citas, añade una" } </Text>

      <FlatList 
      data={citas} style={styles.listado}
        renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente} /> }
      keyExtractor={cita => cita.id}
      />
          </>
        )}

   </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#AA076B",
    flex:1
  },
  
  titulo: {
    color:"#FFF",
    marginTop: 10,
    marginBottom:10,
    textAlign: "center",
    fontSize: 24,
    fontWeight:"bold"
    
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
    textoMostrar: {
     color: "#FFF",
        fontWeight: "bold",
        textAlign:"center"
  },
  btnMostrar: {
          padding: 10,
      backgroundColor: "#7d024e",
    marginVertical: 10,
    marginHorizontal:"2.5%"
  }
})


export default App;
