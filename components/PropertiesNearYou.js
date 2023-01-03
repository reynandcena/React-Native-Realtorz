import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { COLORS, FONTS, SIZES, propData, SHADOWS } from '../constants';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PropertiesNearYou = () => {

    const navigation = useNavigation();

    const [propsData, setPropsData] = useState(propData);

    return (
        <View style={{ marginTop: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium, color: COLORS.light }}
                >Properties Near You</Text>
                <TouchableOpacity>
                    <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, textTransform: 'uppercase', color: COLORS.primary }}>See all</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    propData.map(item => (
                        <View key={item.id}>
                            <TouchableOpacity style={{
                                width: '100%',
                                backgroundColor: COLORS.darkCard,
                                borderRadius: 8,
                                ...SHADOWS.dark,
                                flex: 1,
                                marginTop: 24
                            }}
                                onPress={() => navigation.navigate('Details')}
                            >
                                <Image
                                    source={item.image}
                                    style={{
                                        width: '100%',
                                        height: 150,
                                        borderTopRightRadius: 8,
                                        borderTopLeftRadius: 8
                                    }}
                                />
                                <View style={{ padding: 10 }}>
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium, color: COLORS.light }}>{item.name}</Text>
                                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.gray }}>{item.address}</Text>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginRight: 4 }}>{item.bedroom}</Text>
                                            <Ionicons name="ios-bed-outline" size={18} style={{ color: COLORS.gray }} />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginRight: 4 }}>{item.bath}</Text>
                                            <MaterialCommunityIcons name="bathtub-outline" size={18} style={{ color: COLORS.gray }} />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginRight: 4 }}>{item.sqft}</Text>
                                            <MaterialCommunityIcons name="move-resize" size={18} style={{ color: COLORS.gray }} />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, alignItems: 'center' }}>
                                        <View>
                                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.light }}>Starting Price</Text>
                                            <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium, color: COLORS.primary }}>{item.price}</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Ionicons name="heart-outline" size={24} style={{ color: COLORS.gray }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default PropertiesNearYou