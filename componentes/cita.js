import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight} from 'react-native'; //
// view es similar a un div

const Cita = ({ cita,eliminarPaciente }) => {
    const dialogoEliminar = id => {
        // console.log("eliminando", id)
        eliminarPaciente(id);
    };
    

    return (
        <View style={Styles.cita}>
        <View>
            <Text style={Styles.label}>Paciente: </Text>
            <Text style={Styles.texto}>{cita.paciente } </Text>
        </View>

        <View>
            <Text style={Styles.label}>Propietario: </Text>
            <Text style={Styles.texto}>{cita.propietario} </Text>
        </View>
        
        <View>
            <Text style={Styles.label}>Sintomas: </Text>
            <Text style={Styles.texto}>{cita.sintomas } </Text>
        </View>

        <View>
                <TouchableHighlight onPress={()=> dialogoEliminar(cita.id)} style={Styles.btnEliminar} >
                    <Text style={Styles.textoEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>         
        </View>
            

    </View>
     )
}
const Styles = StyleSheet.create({
    cita: {
        backgroundColor: "#FFF",
        borderBottomColor: "#e1e1e1",
        borderStyle: "solid",
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingTop: 20,
        paddingHorizontal:20 // abreviatura de un pading left y pading right esta propiedad no se encuentra disponible en css nativo
    },
    label: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop:10
    },
    texto: {
        fontSize:17
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: "red",
        marginVertical: 10,
    marginHorizontal:"2.5%"
        
    },
    textoEliminar: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign:"center"
    }
})

export default Cita;