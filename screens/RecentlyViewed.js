import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';

const RecentlyViewed = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
            <FocusedStatusBar backgroundColor={COLORS.darkCard} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                    <View style={{ alignItems: 'center', marginLeft: 70 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, color: COLORS.light, textAlign: 'center' }}>Recently Viewed</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems:'center', marginTop:24 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: COLORS.overlay,
                            borderRadius: 8,
                            paddingHorizontal: 20,
                            paddingVertical: 10
                        }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.light, marginRight: 8 }}>Filter</Text>
                            <MaterialCommunityIcons name="filter-variant" size={24} color={COLORS.light} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: COLORS.overlay,
                            borderRadius: 8,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            marginLeft: 8
                        }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.light, marginRight: 8 }}>Sort</Text>
                            <MaterialCommunityIcons name="sort" size={24} color={COLORS.light} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{fontFamily:FONTS.medium, color:COLORS.gray}}> 5 Homes</Text>
                </View>

                <TouchableOpacity style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay,}} onPress={() => navigation.navigate('Details')}>
                    <Image
                        source={require('../assets/images/Properties/10.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                        }}
                    />

                    <TouchableOpacity style={{
                        backgroundColor:COLORS.darkCard, 
                        borderRadius:100, 
                        padding:5, 
                        width:34, 
                        height:34,
                        position:'absolute',
                        right:10,
                        top:10
                    }}>
                        <Ionicons name="ios-heart-outline" size={24} color={COLORS.light}/>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:20 }}>
                        <View>
                            <Text style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: SIZES.font,
                                color: COLORS.light,
                            }}>Single Family Residence</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Octicons name="location" size={16} color={COLORS.primary} />
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.small,
                                    color: COLORS.light,
                                    marginLeft: 8
                                }}>Leavenworth, KS 66048</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price</Text>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.primary }}>$436</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay,}} onPress={() => navigation.navigate('Details')}>
                    <Image
                        source={require('../assets/images/Properties/8.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                        }}
                    />

                    <TouchableOpacity style={{
                        backgroundColor:COLORS.darkCard, 
                        borderRadius:100, 
                        padding:5, 
                        width:34, 
                        height:34,
                        position:'absolute',
                        right:10,
                        top:10
                    }}>
                        <Ionicons name="ios-heart-outline" size={24} color={COLORS.light}/>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:20 }}>
                        <View>
                            <Text style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: SIZES.font,
                                color: COLORS.light,
                            }}>Villa Residence</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Octicons name="location" size={16} color={COLORS.primary} />
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.small,
                                    color: COLORS.light,
                                    marginLeft: 8
                                }}>1525 E Blue Spruce Rd, Derby, KS 67037</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price</Text>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.primary }}>$436</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay,}} onPress={() => navigation.navigate('Details')}>
                    <Image
                        source={require('../assets/images/Properties/16.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                        }}
                    />

                    <TouchableOpacity style={{
                        backgroundColor:COLORS.darkCard, 
                        borderRadius:100, 
                        padding:5, 
                        width:34, 
                        height:34,
                        position:'absolute',
                        right:10,
                        top:10
                    }}>
                        <Ionicons name="ios-heart-outline" size={24} color={COLORS.light}/>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:20 }}>
                        <View>
                            <Text style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: SIZES.font,
                                color: COLORS.light,
                            }}>Villa Residence</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Octicons name="location" size={16} color={COLORS.primary} />
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.small,
                                    color: COLORS.light,
                                    marginLeft: 8
                                }}>510 W 7th St, Newton, KS 67114</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price</Text>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.primary }}>$436</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay,}} onPress={() => navigation.navigate('Details')}>
                    <Image
                        source={require('../assets/images/Properties/14.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                        }}
                    />

                    <TouchableOpacity style={{
                        backgroundColor:COLORS.darkCard, 
                        borderRadius:100, 
                        padding:5, 
                        width:34, 
                        height:34,
                        position:'absolute',
                        right:10,
                        top:10
                    }}>
                        <Ionicons name="ios-heart-outline" size={24} color={COLORS.light}/>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:20 }}>
                        <View>
                            <Text style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: SIZES.font,
                                color: COLORS.light,
                            }}>Single Family Residence</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Octicons name="location" size={16} color={COLORS.primary} />
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.small,
                                    color: COLORS.light,
                                    marginLeft: 8
                                }}>605 W 5th St, Newton, KS 67114</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price</Text>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.primary }}>$436</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay,}} onPress={() => navigation.navigate('Details')}>
                    <Image
                        source={require('../assets/images/Properties/13.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                        }}
                    />

                    <TouchableOpacity style={{
                        backgroundColor:COLORS.darkCard, 
                        borderRadius:100, 
                        padding:5, 
                        width:34, 
                        height:34,
                        position:'absolute',
                        right:10,
                        top:10
                    }}>
                        <Ionicons name="ios-heart-outline" size={24} color={COLORS.light}/>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:20 }}>
                        <View>
                            <Text style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: SIZES.font,
                                color: COLORS.light,
                            }}>Single Family Residence</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Octicons name="location" size={16} color={COLORS.primary} />
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.small,
                                    color: COLORS.light,
                                    marginLeft: 8
                                }}>5845 Caenen St, Shawnee, KS 66216</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price</Text>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.primary }}>$436</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RecentlyViewed