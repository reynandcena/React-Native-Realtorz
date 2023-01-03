import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, } from "../constants";
import Swiper from 'react-native-swiper';

const CarouselCard = () => {
    return (
        <View>
            <Swiper 
                autoplay={true} 
                style={{height:410, justifyContent:'center', alignItems:'center'}}
                dot={
                    <View
                      style={{
                        backgroundColor: 'rgba(255,255,255,.3)',
                        width: 13,
                        height: 13,
                        borderRadius: 7,
                        marginLeft: 7,
                        marginRight: 7,
                      }}
                    />
                }
                activeDot={
                    <View
                      style={{
                        backgroundColor: '#fff',
                        width: 13,
                        height: 13,
                        borderRadius: 7,
                        marginLeft: 7,
                        marginRight: 7
                      }}
                    />
                }
            >
                
                <View style={{backgroundColor:COLORS.darkCard, padding:20, flex:1, justifyContent:'center', alignItems:'center', borderRadius:8}}>
                    <Image 
                        source={require('../assets/images/Banner/Banner1.png')}
                        style={{
                            width:210,
                            height:210,
                            marginBottom:10
                        }}
                    />
                    <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light, textTransform:'uppercase'}}>Buy a home</Text>
                    <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray, textAlign:'center',width:300}}>We make it easy to browse homes. When you’re ready, you can also connect with a local agent, explore financing solutions, schedule home tours, and more.</Text>               
                </View>

                <View style={{backgroundColor:COLORS.darkCard, padding:20, flex:1, justifyContent:'center', alignItems:'center', borderRadius:8}}>
                    <Image 
                        source={require('../assets/images/Banner/Banner2.png')}
                        style={{
                            width:210,
                            height:210,
                            marginBottom:10
                        }}
                    />
                    <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light, textTransform:'uppercase'}}>Finance a home</Text>
                    <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray, textAlign:'center',width:300}}>
                        We make it easy to take steps to find the right loan, so you can get the home you want.
                    </Text>               
                </View>

                <View style={{backgroundColor:COLORS.darkCard, padding:20, flex:1, justifyContent:'center', alignItems:'center', borderRadius:8}}>
                    <Image 
                        source={require('../assets/images/Banner/Banner3.png')}
                        style={{
                            width:210,
                            height:210,
                            marginBottom:10
                        }}
                    />
                    <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light, textTransform:'uppercase'}}>Rent a home</Text>
                    <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray, textAlign:'center',width:300}}>
                        We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.
                    </Text>               
                </View>

            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        width:10,
        height:10,
        backgroundColor: '#98989F',
        borderRadius:100,
        marginHorizontal:5
    }
})

export default CarouselCard