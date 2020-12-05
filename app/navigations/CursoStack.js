import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cursos from "../screens/Curso";

const Stack = createStackNavigator();

export default function CursoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cursos"
        component={Cursos}
        options={{ title: "Cursos" }}
      />
    </Stack.Navigator>
  );
}
