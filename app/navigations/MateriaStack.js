import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Materias from "../screens/Materia";

const Stack = createStackNavigator();

export default function MateriaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="materias"
        component={Materias}
        options={{ title: "Materias" }}
      />
    </Stack.Navigator>
  );
}
