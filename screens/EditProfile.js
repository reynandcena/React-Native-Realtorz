import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';
import { Value } from 'react-native-reanimated';

const EditProfile = () => {

    const navigation = useNavigation();

    const [text, setText] = React.useState("");

    const [selectImg, setSelectedImg] = React.useState(null)
    let openImage = async () => {
        let picker = await ImagePicker.launchImageLibraryAsync()

        if (picker.cancelled === true) {
            return;
        }
        setSelectedImg({ localUri: picker.uri })
        console.log(picker)
    }


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
                    <View style={{ alignItems: 'center', marginLeft: 90 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, color: COLORS.light, textAlign: 'center' }}>Edit Profile</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View>
                        {
                            selectImg !== null ? (
                                <Image
                                    style={{ width: 80, height: 80, borderRadius: 50, }}
                                    source={{ uri: (selectImg.localUri !== null) ? selectImg.localUri : 'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg' }} />
                            ) : <Image source={require('../assets/images/avatar.png')} style={{ width: 80, height: 80, borderRadius: 50, }} />
                        }
                        <TouchableOpacity style={{
                            backgroundColor: COLORS.darkCard,
                            padding: 10,
                            borderRadius: 50,
                            position: 'absolute',
                            right: -5,
                            top: 45
                        }}
                            onPress={openImage}
                        >
                            <Feather name="edit-3" size={14} color={COLORS.light} />
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={{ marginTop: 24 }}>
                    <View style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.gray,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 24
                    }}>
                        <FontAwesome name="user-o" size={20} color={COLORS.gray} />
                        <TextInput
                            placeholder="Reynan Decena"
                            placeholderTextColor={COLORS.gray}
                            style={{
                                color: COLORS.light,
                                fontFamily: FONTS.regular,
                                fontSize: SIZES.font,
                                width: '90%'
                            }}
                        />
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.gray,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 24
                    }}>
                        <MaterialCommunityIcons name="email-outline" size={20} color={COLORS.gray} />
                        <TextInput
                            placeholder="reynandecena1984@gmail.com"
                            placeholderTextColor={COLORS.gray}
                            style={{
                                color: COLORS.light,
                                fontFamily: FONTS.regular,
                                fontSize: SIZES.font,
                                width: '90%'
                            }}
                        />
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.gray,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 24
                    }}>
                        <Entypo name="location" size={20} color={COLORS.gray} />
                        <TextInput
                            placeholder="1309 N 63rd Ter, Kansas City, KS 66102"
                            placeholderTextColor={COLORS.gray}
                            style={{
                                color: COLORS.light,
                                fontFamily: FONTS.regular,
                                fontSize: SIZES.font,
                                width: '90%'
                            }}
                        />
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.gray,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 24
                    }}>
                        <MaterialCommunityIcons name="form-textbox-password" size={20} color={COLORS.gray} />
                        <TextInput
                            placeholder="********"
                            placeholderTextColor={COLORS.gray}
                            style={{
                                color: COLORS.light,
                                fontFamily: FONTS.regular,
                                fontSize: SIZES.font,
                                width: '90%'
                            }}
                            secureTextEntry
                        />
                    </View>
                </View>

                <TouchableOpacity style={{
                    backgroundColor: COLORS.primary,
                    paddingVertical:15,
                    paddingHorizontal:20,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:130
                }}>
                    <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>Save Changes</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile