import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from "react-native";

import { Icon, Button } from "react-native-elements";

import { colors, parameters } from "../global/styles";

export default function BusinessConsoleScreen({ navigation }) {

    return(
        <View style = {styles.container}>
            <Text>Bienvenido a la consola de negocios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});