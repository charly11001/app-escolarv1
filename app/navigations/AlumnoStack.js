import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Alumnos from "../screens/Alumno";

const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="alumnos"
        component={Alumnos}
        options={{ title: "Alumnos" }}
      />
    </Stack.Navigator>
  );
}
