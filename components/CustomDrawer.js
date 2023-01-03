import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { COLORS, FONTS, SIZES } from "../constants";
import { Feather } from '@expo/vector-icons'; 

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor:'#262B2E'}}
      >
        <View style={{padding:20}}>
          <Image 
            source={require('../assets/images/avatar.png')}
            style={{ width:80, height:80, borderRadius:100, borderWidth:3, borderColor:COLORS.darkBG, marginBottom:10}}
          />
          <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.medium, color:COLORS.white}}>Reynan Decena</Text>
          <Text style={{fontFamily:FONTS.semiBold, fontSize:SIZES.font,color:COLORS.gray}}>UI/UX Designer</Text>
        </View>
        <View style={{width:'100%', height:1, backgroundColor:COLORS.overlay, marginBottom:20}}/>

        <DrawerItemList {...props}/>

        <View style={{padding:20, flexDirection:'row', alignItems:'center'}}>
          <Feather name="log-out" size={20} style={{color:COLORS.light,}}/>
          <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, color:COLORS.light, marginLeft:20}}>Sign Out</Text>
        </View>
      </DrawerContentScrollView>
      
    </View>
  )
}

export default CustomDrawer