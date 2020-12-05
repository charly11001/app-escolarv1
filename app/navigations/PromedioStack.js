import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Promedios from "../screens/Promedio";

const Stack = createStackNavigator();

export default function PromedioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="promedios"
        component={Promedios}
        options={{ title: "Promedios" }}
      />
    </Stack.Navigator>
  );
}
