import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES } from "../constants";
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const Search = ({ onSearch }) => {

    const navigation = useNavigation();

    return (
        <View style={{ marginBottom: 20 }}>
            <Header/>
            <View style={{ paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: COLORS.gray, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Feather name="search" size={24} color="#98989F" />
                <TextInput
                    placeholder="Search properties..."
                    placeholderTextColor="#98989F"
                    style={{
                        color: COLORS.light,
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.font,
                        width: '80%'
                    }}
                    onChangeText={onSearch}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                    <Ionicons name="options-sharp" size={24} color="#98989F" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search