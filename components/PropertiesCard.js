import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, FONTS, SIZES } from '../constants';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const PropertiesCard = ({ data }) => {

    const navigation = useNavigation();

    return (
        <View style={{marginTop:20, }}> 
            <TouchableOpacity style={{
                backgroundColor:COLORS.darkCard,
                borderRadius:8,
                ...SHADOWS.dark,
                flex:1,
            }}
            onPress={() => navigation.navigate('Details')}
            >
                <Image
                    source={data.image}
                    style={{
                        width:'100%',
                        height:150,
                        borderTopRightRadius:8,
                        borderTopLeftRadius:8
                    }}
                />
                <View style={{padding:10}}>
                    <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.medium, color:COLORS.light}}>{data.name}</Text>
                    <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.gray}}>{data.address}</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:5}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, color:COLORS.gray, marginRight:4}}>{data.bedroom}</Text>
                            <Ionicons name="ios-bed-outline" size={18} style={{color:COLORS.gray}}/>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, color:COLORS.gray, marginRight:4}}>{data.bath}</Text>
                            <MaterialCommunityIcons name="bathtub-outline" size={18} style={{color:COLORS.gray}}/>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, color:COLORS.gray, marginRight:4}}>{data.sqft}</Text>
                            <MaterialCommunityIcons name="move-resize" size={18} style={{color:COLORS.gray}}/>
                        </View>
                    </View>  

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:5, alignItems:'center'}}>
                        <View>
                            <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, color:COLORS.light}}>Starting Price</Text>
                            <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.medium, color:COLORS.primary}}>{data.price}</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={24} style={{color:COLORS.gray}}/>
                        </TouchableOpacity>
                    </View>                  
                </View>
                
            </TouchableOpacity>
        </View>
    )
}

export default PropertiesCard