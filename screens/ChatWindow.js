import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';

const ChatWindow = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
            <FocusedStatusBar backgroundColor={COLORS.darkCard} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    <View style={{ marginRight: 12 }}>
                        <Image
                            source={require('../assets/images/avatars/2.jpg')}
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 50,
                                marginLeft: 12
                            }}
                        />
                        <View style={{ 
                            width: 8, 
                            height: 8, 
                            borderRadius: 100, 
                            backgroundColor: COLORS.primary, 
                            position: 'absolute', 
                            bottom: 5, 
                            right: 0, 
                            borderWidth: 1, 
                            borderColor: COLORS.light }} 
                        />
                    </View>
                    <View>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Jane Hopper</Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.gray }}>Online</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ backgroundColor: COLORS.darkCard, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 8 }}>
                        <MaterialIcons name="local-phone" size={24} style={{ color: COLORS.light }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: COLORS.darkCard, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 8, marginLeft: 4 }}>
                        <MaterialIcons name="videocam" size={24} style={{ color: COLORS.light }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginTop: 24, height: 700 }}>
                    <Text style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.font,
                        color: COLORS.gray,
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>Today</Text>
                    <View style={{
                        padding: 20,
                        backgroundColor: COLORS.darkCard,
                        borderBottomStartRadius: 8,
                        borderTopStartRadius: 8,
                        borderBottomRightRadius: 8,
                        width: 140,
                        top: 50,
                        alignItems: 'center',
                        right: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{
                            fontFamily: FONTS.regular,
                            color: COLORS.light
                        }}>Hi, Reynan 👋</Text>
                    </View>

                    <View style={{
                        padding: 20,
                        backgroundColor: COLORS.darkCard,
                        borderBottomStartRadius: 8,
                        borderTopStartRadius: 8,
                        borderBottomRightRadius: 8,
                        width: 250,
                        top: 130,
                        alignItems: 'center',
                        right: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{
                            fontFamily: FONTS.regular,
                            color: COLORS.light
                        }}>I'm looking for information about your house. Can I visit to see your house?</Text>
                    </View>
                    <View style={{
                        top: 240,
                        alignItems: 'center',
                        right: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>12:13</Text>
                    </View>

                    <View style={{
                        padding: 20,
                        backgroundColor: COLORS.light,
                        borderTopStartRadius: 8,
                        borderTopEndRadius: 8,
                        borderBottomEndRadius: 8,
                        width: 250,
                        top: 280,
                        alignItems: 'center',
                        left: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{
                            fontFamily: FONTS.regular,
                            color: COLORS.darkCard
                        }}>Hi, Jane! Of course, the door is always open 😉</Text>
                    </View>

                    <View style={{
                        top: 370,
                        alignItems: 'center',
                        left: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>12:15</Text>
                    </View>

                    <View style={{
                        padding: 20,
                        backgroundColor: COLORS.darkCard,
                        borderBottomStartRadius: 8,
                        borderTopStartRadius: 8,
                        borderBottomRightRadius: 8,
                        width: 280,
                        top: 410,
                        alignItems: 'center',
                        right: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{
                            fontFamily: FONTS.regular,
                            color: COLORS.light
                        }}>That's great, thank you! Sunday at 10 AM does this work for you?</Text>
                    </View>
                    <View style={{
                        top: 500,
                        alignItems: 'center',
                        right: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>12:18</Text>
                    </View>

                    <View style={{
                        padding: 20,
                        backgroundColor: COLORS.light,
                        borderTopStartRadius: 8,
                        borderTopEndRadius: 8,
                        borderBottomEndRadius: 8,
                        width: 200,
                        top: 530,
                        alignItems: 'center',
                        left: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{
                            fontFamily: FONTS.regular,
                            color: COLORS.darkCard
                        }}>Of course, see you on Sunday!</Text>
                    </View>

                    <View style={{
                        top: 620,
                        alignItems: 'center',
                        left: 0,
                        position: 'absolute'
                    }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>12:19</Text>
                    </View>

                </View>



            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS.darkCard,
                    alignItems: 'center',
                    padding: 20,
                    borderRadius: 8,
                    width: '78%'
                }}>
                    <Feather name="plus-circle" size={24} color={COLORS.gray} />
                    <TextInput
                        placeholder="Write a reply..."
                        placeholderTextColor={COLORS.gray}
                        style={{
                            color: COLORS.light,
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.font,
                            width: '80%'
                        }}
                    />
                </View>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.primary,
                    padding: 20,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Feather name="send" size={24} color={COLORS.light} />
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default ChatWindow