import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, StyleSheet,ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES } from "../constants";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector';
import Slider from '@react-native-community/slider';
import { FAB, ToggleButton, Button } from 'react-native-paper';
import FocusedStatusBar from '../components/FocusedStatusBar';
import SelectDropdown from 'react-native-select-dropdown';

const options = [
    { label: "For Sale", value: "For Sale" },
    { label: "For Rent", value: "For Rent" }
];

const Filter = () => {

    const navigation = useNavigation();

    const [price, setPrice] = useState(0);

    let [bathCount, setBathCount] = useState(0);

    let [bedCount, setBedCount] = useState(0);

    const bedIncrementCount = () => {
        setBedCount(bedCount + 1);
    }

    const bedDecrementCount = () => {
        if (bedCount > 0) {
            setBedCount(bedCount - 1);
        } else {
            Alert.alert("Value is already zero.")
        }

    }

    const bathIncrementCount = () => {
        setBathCount(bathCount + 1);
    }

    const bathDecrementCount = () => {
        if (bathCount > 0) {
            setBathCount(bathCount - 1);
        } else {
            Alert.alert("Value is already zero.")
        }

    }

    const minSQFT = [
        '1,000',
        '1,500',
        '2,000',
        '2,500',
        '3,000',
        '3,500',
    ];

    const [value, setValue] = React.useState('residential');

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
            <FocusedStatusBar backgroundColor={COLORS.darkCard} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.darkCard,
                            borderRadius: 8,
                            width: 48,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={24} style={{ color: COLORS.light }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.large, color: COLORS.light }}>Filter</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: COLORS.darkCard, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Reset</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ marginTop: 20 }}>
                        <SwitchSelector
                            options={options}
                            initial={0}
                            textColor={COLORS.light} //'#7a44cf'
                            selectedColor={COLORS.light}
                            buttonColor={COLORS.darkCard}
                            backgroundColor={COLORS.darkBG}
                            borderWidth={1}
                            borderColor={COLORS.overlay}
                            borderRadius={8}
                            selectedTextStyle={{ fontFamily: FONTS.medium, fontSize: SIZES.font }}
                            textStyle={{ fontFamily: FONTS.medium, fontSize: SIZES.font }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 24, justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.light }}>Price Range</Text>
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary }}>${price}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Slider
                            style={{ width: 330, height: 50, }}
                            minimumValue={120000}
                            maximumValue={500000}
                            value={120000}
                            onValueChange={(value) => setPrice(value)}
                            thumbTintColor={COLORS.primary}
                            minimumTrackTintColor={COLORS.primary}
                            maximumTrackTintColor={COLORS.light}
                        />
                    </View>

                </View>

                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.light }}>Features</Text>

                    <View style={{ marginTop: 24, justifyContent: 'center' }}>
                        <View>
                            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>Beds</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -7 }}>
                            <FAB
                                style={{ backgroundColor: COLORS.darkCard, position: 'absolute', right: 80, borderRadius:8 }}
                                mode="contained"
                                onPress={bedDecrementCount}
                                icon="minus"
                                small
                                color='white'
                            />

                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: SIZES.medium,
                                color: COLORS.light,
                                position: 'absolute',
                                right: 56
                            }}>{bedCount}</Text>

                            <FAB
                                style={{ backgroundColor: COLORS.primary, position: 'absolute', right: 0, borderRadius:8 }}
                                mode="contained"
                                onPress={bedIncrementCount}
                                icon="plus"
                                small
                                color='white'
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 54, justifyContent: 'center' }}>
                        <View>
                            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>Baths</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -7 }}>
                            <FAB
                                style={{ backgroundColor: COLORS.darkCard, position: 'absolute', right: 80, borderRadius:8 }}
                                mode="contained"
                                onPress={bathDecrementCount}
                                icon="minus"
                                small
                                color='white'
                            />

                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: SIZES.medium,
                                color: COLORS.light,
                                position: 'absolute',
                                right: 56
                            }}>{bathCount}</Text>

                            <FAB
                                style={{ backgroundColor: COLORS.primary, position: 'absolute', right: 0, borderRadius:8 }}
                                mode="contained"
                                onPress={bathIncrementCount}
                                icon="plus"
                                small
                                color='white'
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 54 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.light }}>Property Facts</Text>
                    <View style={{ marginTop: 18 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Square Feet</Text>
                        <View  style={{ marginTop: 8, justifyContent:'space-between', flexDirection:'row', alignItems:'center' }}>
                            <SelectDropdown
                                data={minSQFT}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                defaultButtonText={'Min'}
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

                            <View style={{width:6, height:2, backgroundColor:COLORS.light}}/>

                            <SelectDropdown
                                data={minSQFT}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                defaultButtonText={'Min'}
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
                    </View>
                    <View style={{ marginTop: 18 }}>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Lot Size</Text>
                        <View  style={{ marginTop: 8, justifyContent:'space-between', flexDirection:'row', alignItems:'center' }}>
                            <SelectDropdown
                                data={minSQFT}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                defaultButtonText={'Min'}
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

                            <View style={{width:6, height:2, backgroundColor:COLORS.light}}/>

                            <SelectDropdown
                                data={minSQFT}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                defaultButtonText={'Min'}
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
                    </View>
                </View>

                <View style={{ marginTop: 34 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.light }}>Property Type</Text>

                    <View style={{ marginTop: 24, flexDirection:'row', justifyContent:'space-between' }}>
                        <ToggleButton.Group
                            onValueChange={value => setValue(value)}
                            value={value}
                        >
                            <ToggleButton
                                icon={()=><View><Text style={{color:COLORS.light,fontFamily:FONTS.medium}}>Residential</Text></View>}
                                value="residential"
                                style={{borderWidth:1,
                                    borderColor:COLORS.overlay,
                                    width:100, 
                                    borderRadius:8, 
                                    backgroundColor:
                                    value === "residential"// ERROR! checked is undefined
                                    ? COLORS.primary
                                    : COLORS.darkCard,
                                }}
                            />  

                            <ToggleButton
                                icon={()=><View><Text style={{color:COLORS.light,fontFamily:FONTS.medium}}>Commercial</Text></View>}
                                value="commercial"
                                style={{borderWidth:1,
                                    borderColor:COLORS.overlay,
                                    width:100, 
                                    borderRadius:8, 
                                    backgroundColor:
                                    value === "commercial"// ERROR! checked is undefined
                                    ? COLORS.primary
                                    : COLORS.darkCard,
                                }}
                            />  

                            <ToggleButton
                                icon={()=><View><Text style={{color:COLORS.light,fontFamily:FONTS.medium}}>Industrial</Text></View>}
                                value="industrial"
                                style={{borderWidth:1,
                                    borderColor:COLORS.overlay,
                                    width:100, 
                                    borderRadius:8, 
                                    backgroundColor:
                                    value === "industrial"// ERROR! checked is undefined
                                    ? COLORS.primary
                                    : COLORS.darkCard,
                                }}
                            />  
                        </ToggleButton.Group>
                    </View>
                    
                </View>
                
                <View style={{ marginTop: 34, flexDirection:'row', justifyContent:'space-between' }}>
                    <Button 
                        mode="contained" 
                        style={{
                            backgroundColor:COLORS.darkCard,
                            width:'48%'
                        }}
                        onPress={() => console.log('Reset')}
                    >
                    <Text style={{fontFamily:FONTS.medium, textTransform:'none'}}>Reset</Text>
                    </Button>
                    <Button 
                        mode="contained" 
                        style={{
                            backgroundColor:COLORS.primary,
                            width:'48%'
                        }}
                        onPress={() => navigation.navigate("Home")}
                    >
                    <Text style={{fontFamily:FONTS.medium, textTransform:'none'}}>Apply</Text>
                    </Button>
                </View>                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    dropdown1BtnStyle: {
        width: '40%',
        height: 50,
        backgroundColor: COLORS.darkCard,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.overlay,
    },

    dropdown1BtnTxtStyle: {
        color: COLORS.light,
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

export default Filter