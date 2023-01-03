import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';

const AddNewProperty1 = () => {

    const navigation = useNavigation();

    const states = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
    ];

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
                    <View style={{ alignItems: 'center', marginLeft: 60 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, color: COLORS.light, textAlign: 'center' }}>Add New Property</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.light }}>Address</Text>
                    <Text style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small,
                        backgroundColor: COLORS.darkCard,
                        color: COLORS.light,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderRadius: 50
                    }}>01/08</Text>
                </View>
                <View style={{ width: '100%', height: 4, backgroundColor: COLORS.darkCard, borderRadius: 50, marginTop: 24 }}>
                    <View style={{ width: '12.5%', height: 4, backgroundColor: COLORS.primary, borderRadius: 50, }} />
                </View>
                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.light, }}>Property Address</Text>

                    <View style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.gray,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 16
                    }}>
                        <TextInput
                            placeholder="Street Address"
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
                        marginBottom: 16
                    }}>
                        <TextInput
                            placeholder="Unit Number"
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
                        marginBottom: 16
                    }}>
                        <TextInput
                            placeholder="City Name"
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
                        marginBottom: 16
                    }}>
                        <TextInput
                            placeholder="Unit Number"
                            placeholderTextColor={COLORS.gray}
                            style={{
                                color: COLORS.light,
                                fontFamily: FONTS.regular,
                                fontSize: SIZES.font,
                                width: '90%'
                            }}
                        />
                    </View>

                    <SelectDropdown
                        data={states}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        defaultButtonText={'Select a state'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
                        buttonStyle={styles.dropdown1BtnStyle}
                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={COLORS.light} size={12} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                        rowStyle={styles.dropdown1RowStyle}
                        rowTextStyle={styles.dropdown1RowTxtStyle}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    dropdown1BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.darkBG,
        borderBottomWidth:1,
        borderColor: COLORS.gray,
    },

    dropdown1BtnTxtStyle: {
        color: COLORS.gray,
        textAlign: 'left',
        fontFamily:FONTS.regular,
        fontSize:SIZES.font
    },
    
    dropdown1DropdownStyle: { 
        backgroundColor: COLORS.darkCard 
    },

    dropdown1RowStyle: { 
        backgroundColor: COLORS.darkCard, 
        borderBottomColor: 
        COLORS.overlay, 
    },

    dropdown1RowTxtStyle: { 
        color: COLORS.light,
        textAlign: 'left',
        fontFamily:FONTS.regular,
        fontSize:SIZES.font 
    },


});

export default AddNewProperty1