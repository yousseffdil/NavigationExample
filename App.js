import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import Pantalla1 from './Components/Pantalla1';
import Pantalla2 from './Components/Pantalla2';

const Stack = createStackNavigator();


/**
 * Se crea un contenedor de la classe navigationContainer, donde dentro va un Stack.Navigator, al cual se le dice cual sera la pantalla principal mediante el prompt initialRouteName="";
 * Dentro de este se crean tantas Stack.Screen tenga nuestro programa, en este caso 2, a cada una se le da un nombre y se le dice de que componente pertenecen.
 * Esto se hace para posteriormente dentro de cada componente podremos navegar entre otras pantallas sin nescecidad de un container
 * @returns "" 
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantalla1">  
        <Stack.Screen name="Pantalla1" component={Pantalla1} />
        <Stack.Screen name="Pantalla2" component={Pantalla2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
