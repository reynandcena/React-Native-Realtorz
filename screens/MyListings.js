import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';

const MyListings = () => {

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
                        onPress={() => navigation.navigate('ProfileTab')}
                    >
                        <Ionicons name="arrow-back" size={24} style={{ color: COLORS.light }} />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginLeft: 80 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, color: COLORS.light, textAlign: 'center' }}>My Listings</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: COLORS.overlay, borderRadius: 8, flexDirection: 'row', marginTop: 24 }}>
                    <Image
                        source={require('../assets/images/Properties/4.jpg')}
                        style={{
                            width: 120,
                            height: 120,
                            borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8
                        }}
                    />
                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>Single Family Residence</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <Avatar.Icon size={34} icon="bathtub-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>2</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <Avatar.Icon size={34} icon="bed-double-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>3</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Icon size={34} icon="move-resize" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>1,880 Ft</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.primary, marginTop: 8 }}>$1,600 - $1,800</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: COLORS.overlay, borderRadius: 8, flexDirection: 'row', marginTop: 24 }}>
                    <Image
                        source={require('../assets/images/Properties/12.jpg')}
                        style={{
                            width: 120,
                            height: 120,
                            borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8
                        }}
                    />
                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>Single Family Residence</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <Avatar.Icon size={34} icon="bathtub-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>2</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <Avatar.Icon size={34} icon="bed-double-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>3</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Icon size={34} icon="move-resize" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>1,880 Ft</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.primary, marginTop: 8 }}>$1,600 - $1,800</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: COLORS.overlay, borderRadius: 8, flexDirection: 'row', marginTop: 24 }}>
                    <Image
                        source={require('../assets/images/Properties/8.jpg')}
                        style={{
                            width: 120,
                            height: 120,
                            borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8
                        }}
                    />
                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>Single Family Residence</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <Avatar.Icon size={34} icon="bathtub-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>2</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <Avatar.Icon size={34} icon="bed-double-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>3</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Icon size={34} icon="move-resize" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                                <View>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>1,880 Ft</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.primary, marginTop: 8 }}>$1,600 - $1,800</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.primary,
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 24
                }}
                    onPress={() => navigation.navigate('ANP1')}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Octicons name="diff-added" size={18} color={COLORS.light} />
                        <Text style={{ fontFamily: FONTS.medium, color: COLORS.light, marginLeft: 8 }}>Add Property</Text>
                    </View>

                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyListings