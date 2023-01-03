import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';
import Header from '../components/Header';

const AddProperty = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
      <FocusedStatusBar backgroundColor={COLORS.darkCard} />
      <Header />
      <View style={{
        flex:1, alignItems:'center'
      }}>

        <Image
          source={require('../assets/images/Banner/MyHomeBanner.png')}
          style={{ width: '100%', height: 380 }}
        />
        
        <Text style={{
          fontFamily:FONTS.bold,
          fontSize:SIZES.large,
          color:COLORS.light,
          marginBottom:8
        }}>Ready to sell your home?</Text>

        <Text style={{
          fontFamily:FONTS.regular,
          fontSize:SIZES.font,
          color:COLORS.light,
          textAlign:'center',
          width:280,
          marginBottom:16
        }}>We are making it simpler to sell your home and move forward.</Text>

        <TouchableOpacity style={{
          backgroundColor: COLORS.primary,
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
          onPress={() => navigation.navigate('MyListings')}
        >
          <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>Add Property</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default AddProperty