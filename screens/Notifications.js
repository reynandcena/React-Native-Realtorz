import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Avatar, Badge } from 'react-native-paper';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';

const Notifications = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
            <FocusedStatusBar backgroundColor={COLORS.darkCard} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.darkCard,
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={24} style={{ color: COLORS.light }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, color: COLORS.light }}>Notifications</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: COLORS.darkCard, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 8 }}>
                        <Feather name="more-horizontal" size={24} style={{ color: COLORS.light }}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{marginTop:24}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Icon size={44} icon="calendar" color='#07B999' style={{borderRadius:8, backgroundColor:'#07B99920', marginRight:16}}/>
                            <View>
                                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light}}>Booking Successful!</Text>
                                <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray}}>20 Dec. 2022 | 8:39 PM</Text>
                            </View>
                        </View>
                        
                        <Badge style={{
                            borderRadius:4,
                            fontFamily:FONTS.medium,
                            fontSize:SIZES.small,
                            backgroundColor:COLORS.primary,
                            color:COLORS.light,
                            top:-15
                        }}>New</Badge>
                    </View>   
                    <Text style={{
                        fontFamily:FONTS.regular, 
                        fontSize:SIZES.font, 
                        marginTop:8, 
                        color:COLORS.light
                    }}>
                        Congratulations! You have successfully booked a house for 3 days for $90. Enjoy the services!
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:24}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Icon size={44} icon="calendar" color='#07B999' style={{borderRadius:8, backgroundColor:'#07B99920', marginRight:16}}/>
                            <View>
                                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light}}>Booking Successful!</Text>
                                <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray}}>19 Dec. 2022 | 6:42 PM</Text>
                            </View>
                        </View>
                        
                        <Badge style={{
                            borderRadius:4,
                            fontFamily:FONTS.medium,
                            fontSize:SIZES.small,
                            backgroundColor:COLORS.primary,
                            color:COLORS.light,
                            top:-15
                        }}>New</Badge>
                    </View>   
                    <Text style={{
                        fontFamily:FONTS.regular, 
                        fontSize:SIZES.font, 
                        marginTop:8, 
                        color:COLORS.light
                    }}>
                        Congratulations! You have successfully booked a villa for 5 days for $150. Enjoy the services!
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:24}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Icon size={44} icon="application-settings-outline" color='#FC9F1C' style={{borderRadius:8, backgroundColor:'#FC9F1C20', marginRight:16}}/>
                            <View>
                                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light}}>New Services Available!</Text>
                                <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray}}>14 Dec. 2022 | 9:29 PM</Text>
                            </View>
                        </View>
                    </View>   
                    <Text style={{
                        fontFamily:FONTS.regular, 
                        fontSize:SIZES.font, 
                        marginTop:8, 
                        color:COLORS.light
                    }}>
                        You can now make multiple bookings at once. You can also cancel your bookings.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:24}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Icon size={44} icon="credit-card-plus-outline" color='#417FFE' style={{borderRadius:8, backgroundColor:'#417FFE20', marginRight:16}}/>
                            <View>
                                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light}}>Credit Card Connected!</Text>
                                <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray}}>12 Dec. 2022 | 02:15 PM</Text>
                            </View>
                        </View>
                    </View>   
                    <Text style={{
                        fontFamily:FONTS.regular, 
                        fontSize:SIZES.font, 
                        marginTop:8, 
                        color:COLORS.light
                    }}>
                        Your credit card has been successfully linked. Enjoy our services.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:24}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Icon size={44} icon="account" color='#2D9BB1' style={{borderRadius:8, backgroundColor:'#2D9BB120', marginRight:16}}/>
                            <View>
                                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, color:COLORS.light}}>Account Setup Successful</Text>
                                <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray}}>12 Dec. 2022 | 12:03 PM</Text>
                            </View>
                        </View>
                    </View>   
                    <Text style={{
                        fontFamily:FONTS.regular, 
                        fontSize:SIZES.font, 
                        marginTop:8, 
                        color:COLORS.light
                    }}>
                        Your account creation is successful, you can now experience our services.
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications