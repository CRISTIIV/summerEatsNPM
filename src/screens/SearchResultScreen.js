import React from 'react'
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import SearchResultCard from '../components/SearchResultCard'
import { foodCartData } from '../global/Data';
import {colors} from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;


const SearchResultScreen = ({navigation,route}) => {
    return (
        <View style ={styles.container}>

           

            <View>
                <FlatList 
                    style ={{backgroundColor:colors.title}}
                    data = {foodCartData}
                    keyExtractor ={(item,index)=>index.toString()}
                    renderItem ={({item,index})=> (

                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.images}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberOfReview}
                            restaurantName ={item.restaurantName}
                            farAway ={item.farAway}
                            businessAddress ={item.businessAddress}
                            productData ={item.productData}
                            OnPressRestaurantCard ={()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
                        />
                                    
                          )}

                     ListHeaderComponent ={
                        <View>
                            <Text style ={styles.listHeader}>{foodCartData.length} Resultados para {route.params.item}</Text>
                        </View>
                     }   

                     showsVerticalScrollIndicator ={false}
                />
            </View>
           
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
      paddingTop:20
    },

    listHeader:{
        color :colors.turquoise,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
}
})
