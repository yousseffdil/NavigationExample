import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

/**
 * Este metodo devuelve un texto con un boton para poder navegar a otra pantalla utilizando el metodo de navigate('Nombre de la pantalla puesta en el container del App.js')
 * @param {navigation} param0 
 * @returns 
 */
const Pantalla1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Estás en la pantalla 1</Text>
      <Button
        title="Ir a la pantalla 2"
        onPress={() => navigation.navigate('Pantalla2')}// Navega a la pantalla llamada "Pantalla2" cuando se presiona el botón
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pantalla1;
