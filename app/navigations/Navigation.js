import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import AlumnosStack from "./AlumnoStack";

import MaestrosStack from "./MaestroStack";
import MateriasStack from "./MateriaStack";
import PromediosStack from "./PromedioStack";
import CursosStack from "./CursoStack";



const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680"
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="alumnos"
          component={AlumnosStack}
          options={{ title: "Alumnos" }}
        />
       
        <Tab.Screen
          name="maestros"
          component={MaestrosStack}
          options={{ title: "Maestros" }}
        />
        <Tab.Screen
          name="materias"
          component={MateriasStack}
          options={{ title: "Materias" }}
        />
        <Tab.Screen
          name="promedios"
          component={PromediosStack}
          options={{ title: "Promedios" }}
        />

        <Tab.Screen
          name="cursos"
          component={CursosStack}
          options={{ title: "Cursos" }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "alumnos":
      iconName = "account";
      break;
    
    case "maestros":
      iconName = "account-check";
      break;
    case "materias":
      iconName = "book";
      break;
    case "promedios":
      iconName = "chart-bar";
      break;
      case "cursos":
        iconName = "chart-bar";
        break;


    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
