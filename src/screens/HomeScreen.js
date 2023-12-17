import React, { useState } from "react";

import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, FlatList, Pressable, Image, Dimensions, StatusBar
} from "react-native";
import { Icon } from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { filterData, foodCartData } from "../global/Data";
import FoodCard from "../components/FoodCard";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {

    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0");

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(255, 140, 82,1)"
            />
            <HomeHeader navigation={navigation} />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View style={{ backgroundColor: colors.title, paddingBottom: 15 }}>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: "space-evenly" }}>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(true)
                            }}
                        >
                            <View style={{ ...styles.deliveryB, backgroundColor: delivery ? colors.turquoise : colors.grey }}>
                                <Text style={{ ...styles.deliveryT, color: colors.title }}>Entrega</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false)
                                navigation.navigate("RestaurantMapScreen")
                            }}
                        >
                            <View style={{ ...styles.deliveryB, backgroundColor: delivery ? colors.grey2 : colors.turquoise }}>
                                <Text style={{ ...styles.deliveryT, color: colors.title }}>Recógelo</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.filterView}>
                        <View style={styles.addressView}>
                            <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 10 }}>
                                <Icon
                                    type="material-community"
                                    name="map-marker"
                                    color={colors.grey3}
                                    size={30}
                                />
                                <Text style={{ marginLeft: 5 }}>Tu dirección actual </Text>
                            </View>

                            <View style={styles.clock}>
                                <Icon
                                    type="material-community"
                                    name="clock-time-four"
                                    color={colors.grey3}
                                    size={30}
                                />
                                <Text style={{ marginLeft: 5 }}> Ahora </Text>
                            </View>
                        </View>

                        <View>
                            <Icon
                                type="material-community"
                                name="tune"
                                color={colors.grey3}
                                size={30}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>
                        Categorías
                    </Text>
                </View>

                <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => { setIndexCheck(item.id) }}
                            >
                                <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                                    <Image
                                        style={{ height: 60, width: 60 }}
                                        source={item.image}
                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ? { ...styles.smallCardTextSelected } : { ...styles.smallCardText }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> Reparto gratis en tu playa </Text>
                </View>

                <View>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal={true}
                        data={foodCartData}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ marginRight: 5 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}
                                />
                            </View>
                        )}
                    />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> Promociones disponibles </Text>
                </View>

                <View>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal={true}
                        data={foodCartData}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ marginRight: 5 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}
                                />
                            </View>
                        )}
                    />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> Locales en tu playa </Text>
                </View>

                <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
                    {
                        foodCartData.map(item => (
                            <View key={item.id} style={{ paddingBottom: 20 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}
                                />
                            </View>
                        ))
                    }
                </View>

            </ScrollView>

            {delivery &&
                <View style={styles.floatButton}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("RestaurantMapScreen") }}


                    >
                        <Icon
                            name="place"
                            type="material"
                            color={colors.title}
                            size={32}
                        />

                        <Text style={{ color: colors.title, fontWeight: "bold" }}>Mapa</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryB: parameters.deliveryButton,

    deliveryT: parameters.deliveryText,

    filterView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    clock: {
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: colors.title,
        borderRadius: 16,
        paddingRight: 10,
    },

    smallCardTextSelected: {
        fontWeight: "bold",
        color: colors.title,
    },

    smallCardText: {
        fontWeight: "bold",
        color: colors.grey3,
    },

    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey2,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        margin: 10,
        width: 80,
        height: 100,

        //marginHorizontal: 10,
        //marginVertical: 10,
    },

    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.turquoise,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        margin: 10,
        width: 80,
        height: 100,

        //marginHorizontal: 10,
        //marginVertical: 10,
    },


    addressView: {
        flexDirection: 'row',
        backgroundColor: colors.grey2,
        borderRadius: 17,
        paddingVertical: 3,
        paddingHorizontal: 25,
    },

    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        //color: colors.grey3,
        color: colors.turquoise,
        paddingLeft: 10,
        //marginHorizontal: 20,
        //marginVertical: 10,
    },

    headerTextView: {
        backgroundColor: colors.grey2,
        //flexDirection: 'row',
        //alignItems: "center",
        //justifyContent: "space-between",
        //paddingHorizontal: 20,
        paddingVertical: 5,
    },

    floatButton: {
        position: "absolute",
        bottom: 20,
        right: 15,
        backgroundColor: colors.turquoise,
        borderRadius: 30,
        width: 60,
        height: 60,
        elevation: 10,
        alignItems: "center",
        //justifyContent: "center",
    },


});