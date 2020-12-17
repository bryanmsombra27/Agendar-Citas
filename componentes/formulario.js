import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput,Button,TouchableHighlight,ScrollView,Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from "shortid";


const Formulario = ({ citas,setCitas,guardarMostrarForm }) => {
  const [paciente,guardarPaciente] = useState("");
  const [propietario,guardarPropietario]  = useState("");
  const [telefono,guardarTelefono] =  useState("");
  const [sintomas, guardarSintomas] = useState("");
  
  const [fecha,guardarFecha] = useState("");
  const [hora,guardarHora] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = { year: "numeric", month: "long", day: "2-digit" };

    guardarFecha( date.toLocaleDateString("es-ES", opciones));      

    // console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  //muestra u oculta el Time Picker   

    const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const confirmarHora = (hora) => {
    const hour = hora.getHours();
    const minutes = hora.getMinutes();


    guardarHora(`${hour}:${minutes}`);
    
    // console.warn("La Hora ha sido confirmada: ", hora);
    hideTimePicker();
  };

  //crear Cita 
  const crearNuevaCita = () => {
    if (paciente.trim() === "" || propietario.trim() === "" || telefono.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
      mostrarAlerta();
      
    }
    //creear nueva cita
    const cita = { paciente, propietario, telefono, fecha, hora, sintomas, id: shortid.generate() };

    //agregar al state
    const citasNuevo = [...citas,cita];

    setCitas(citasNuevo);

    //ocultar el Formulario
    guardarMostrarForm(false);
    //resetear el formulario
  };
  //mostrar la alerta si falla la validacion
  const mostrarAlerta = () => {
    Alert.alert("Error","Todos los campos son obligatorios",[{text:"Ok"}])
  }
  return (
    <>
      <ScrollView>
          <View style={Styles.formulario}>
        <View>
          <Text style={Styles.label}> Paciente: </Text>
          <TextInput
            style={Styles.input}
            onChangeText={(texto) => guardarPaciente(texto)}></TextInput>
        </View>

        <View>
          <Text style={Styles.label}> Dueño: </Text>
          <TextInput
            style={Styles.input}
            onChangeText={(texto) => guardarPropietario(texto)}></TextInput>
        </View>

        <View>
          <Text style={Styles.label}>Telefono Contacto: </Text>
          <TextInput
            style={Styles.input}
            onChangeText={(texto) => guardarTelefono(texto)}
            keyboardType="numeric"></TextInput>
        </View>
        <Text style={Styles.label }>Fecha:</Text>

      <View style={Styles.separacion } > 
        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
          />
       <Text>   {fecha} </Text>
      </View> 
        
        <Text style={Styles.label }>Hora:</Text>
        
        <View style={Styles.separacion }>
      <Button title="Seleccionar Hora" onPress={showTimePicker}  />
      <DateTimePickerModal 
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_ES"
            is24Hour
          />
        <Text>  {hora}</Text>
    </View> 

        <View>
          <Text style={Styles.label}> Sintomas: </Text>
          <TextInput
            style={Styles.input}
            onChangeText={(texto) => guardarSintomas(texto)}
            multiline></TextInput>
        </View>
      </View>
        <View>
                <TouchableHighlight onPress={()=>crearNuevaCita()} style={Styles.btnAdd} >
                    <Text style={Styles.textoCita}>Realizar Cita</Text>
                </TouchableHighlight>         
        </View>


    </ScrollView>
    </>
  );
};
const Styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  separacion: {
    marginVertical:30,
  },
  textoCita: {
     color: "#FFF",
        fontWeight: "bold",
        textAlign:"center"
  },
  btnAdd: {
          padding: 10,
      backgroundColor: "#7d024e",
    marginVertical: 10,
    marginHorizontal:"2.5%"
  }
});

export default Formulario;
