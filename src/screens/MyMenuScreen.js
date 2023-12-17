import React from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { Icon, ListItem } from "react-native-elements";

import { colors } from "../global/styles";

export default function MyMenuScreen({ navigation }) {
  const menuItems = [
    {
      title: "Cliente",
      iconName: "user",
      iconType: "font-awesome",
      onPress: () => { navigation.navigate("MyAccountScreen") },
    },
    {
      title: "Consola de negocio",
      iconName: "business",
      iconType: "ionicon",
      onPress: () => { navigation.navigate("BusinessConsoleScreen") },
    },
    {
      title: "Pagos",
      iconName: "credit-card",
      iconType: "font-awesome",
      onPress: () => {
        // Handle payment button press
      },
    },
    {
      title: "Configuración",
      iconName: "cog",
      iconType: "font-awesome",
      onPress: () => {
        // Handle configuration button press
      },
    },
    {
      title: "Ayuda",
      iconName: "help",
      iconType: "entypo",
      onPress: () => {
        // Handle help button press
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ padding: 16, marginVertical: 120 }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} bottomDivider onPress={item.onPress}>
            <Icon
              name={item.iconName}
              type={item.iconType}
              color={colors.turquoise}
              size={24}
            />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>


      <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
        <Text style={styles.preferences}>Preferencias</Text>

        <View style={styles.switchText}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <Icon
              name="theme-light-dark"
              type="material-community"
              color={colors.grey4}
              size={24}
            />
            <Text style={styles.darkthemeText}>Tema oscuro</Text>
          </View>

          <View style={{ paddingRight: 10 }}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor="#f4f3f4"
            />
          </View>
        </View>

      </View>

      <View style={{ alignItems: "center", padding: 16, marginHorizontal: 16 }}>
        <Icon
          name="log-out"
          type="entypo"
          color={colors.turquoise}
          size={24}
          onPress={() => {
            // Handle log out button press
          }}
        />
        <Text style={{ color: colors.turquoise, fontSize: 16, fontWeight: "bold" }}>Cerrar Sesión</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 16,
  },
  preferences: {
    fontSize: 16,
    color: colors.grey4,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey4,
    alignSelf: "center",
    paddingLeft: 10,
    fontWeight: "bold"
  }

});