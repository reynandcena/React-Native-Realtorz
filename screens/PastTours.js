import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Octicons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';

const PastTours = () => {

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
                    <View style={{ alignItems: 'center', marginLeft: 80 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, color: COLORS.light, textAlign: 'center' }}>Past Tours</Text>
                    </View>
                </View>
                <View style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay, padding: 20 }}>
                    <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Mon, Nov 7, 10:00 AM to 10:45 AM </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <View style={{
                            backgroundColor: '#EB5A5A',
                            borderRadius: 100,
                            width: 16,
                            height: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8
                        }}>
                            <Ionicons name="close" size={12} color={COLORS.darkBG} />
                        </View>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.small, color: '#EB5A5A' }}>Canceled</Text>
                    </View>
                    <Text style={{ marginTop: 16, fontFamily: FONTS.regular, color: COLORS.gray }}>
                        You can request another tour anytime, if you have questions, please contact your agent
                    </Text>
                    <Image
                        source={require('../assets/images/Properties/10.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                            marginTop: 16
                        }}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
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
                </View>

                <View style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay, padding: 20 }}>
                    <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Wed, Oct 19, 11:00 AM to 11:45 AM </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <View style={{
                            backgroundColor: COLORS.primary,
                            borderRadius: 100,
                            width: 16,
                            height: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8
                        }}>
                            <Ionicons name="checkmark-sharp" size={12} color={COLORS.darkBG} />
                        </View>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.small, color: COLORS.primary }}>Complete</Text>
                    </View>
                    <Image
                        source={require('../assets/images/Properties/9.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                            marginTop: 16
                        }}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
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
                                }}>Derby, KS 67037</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price</Text>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.primary }}>$436</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 24, borderRadius: 8, borderWidth: 1, borderColor: COLORS.overlay, padding: 20 }}>
                    <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Thu, Sep 22, 11:00 AM to 11:45 AM </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <View style={{
                            backgroundColor: COLORS.primary,
                            borderRadius: 100,
                            width: 16,
                            height: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8
                        }}>
                            <Ionicons name="checkmark-sharp" size={12} color={COLORS.darkBG} />
                        </View>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.small, color: COLORS.primary }}>Complete</Text>
                    </View>
                    <Image
                        source={require('../assets/images/Properties/11.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                            marginTop: 16
                        }}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
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
                                }}>Newton, KS 67114</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price</Text>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.primary }}>$436</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default PastTours