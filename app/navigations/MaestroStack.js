import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Maestros from "../screens/Maestro";

const Stack = createStackNavigator();

export default function MaestroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="maestros"
        component={Maestros}
        options={{ title: "Maestros" }}
      />
    </Stack.Navigator>
  );
}
