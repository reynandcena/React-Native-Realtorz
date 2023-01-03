import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, propData } from "../constants";

import FocusedStatusBar from '../components/FocusedStatusBar';
import CarouselCard from '../components/CarouselCard';
import LatestProjects from '../components/LatestProjects';
import PropertiesNearYou from '../components/PropertiesNearYou';
import Header from '../components/Header';

import { AntDesign, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {

  const [propsData, setPropsData] = useState(propData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setPropsData(propData);
    }

    const filteredData = propData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setPropsData(propData);
    } else {
      setPropsData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>

      <FocusedStatusBar backgroundColor={COLORS.darkCard} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Header/>

        <View style={{marginBottom:20}}>
          <Text style={{fontFamily:FONTS.medium, fontSize:32, color:COLORS.gray}}>Find the</Text>
          <Text style={{fontFamily:FONTS.bold, fontSize:34, color:COLORS.light, marginTop:-20}}>best property</Text>
        </View>

        <View style={{marginBottom:20}}>
          <View style={{paddingTop:10, paddingBottom:10, borderBottomWidth:1, borderBottomColor:COLORS.gray, flexDirection:'row', justifyContent:'space-between'}}>
            <Feather name="search" size={24} color="#98989F" />
            <TextInput 
              placeholder="Enter an address, city, or ZIP code"
              placeholderTextColor="#98989F" 
              style={{
                color:COLORS.light,
                fontFamily:FONTS.regular,
                fontSize:SIZES.font,
                width:'80%'
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
              <Ionicons name="options-sharp" size={24} color="#98989F"  />
            </TouchableOpacity>          
          </View>
        </View>

        <CarouselCard />

        <LatestProjects />

        <PropertiesNearYou />

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen