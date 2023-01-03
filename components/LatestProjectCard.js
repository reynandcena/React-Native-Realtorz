import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SHADOWS, assets, FONTS, SIZES } from '../constants';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LatestProjectCard = ({ data }) => {

    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <TouchableOpacity style={{
                width: 170,
                paddingBottom: 22,
                marginRight: 12,
                backgroundColor: COLORS.darkCard,
                borderRadius: 8,
                ...SHADOWS.dark,
                flex: 1,
            }}
            onPress={() => navigation.navigate('Details')}
            >
                <Image
                    source={data.image}
                    style={{
                        width: '100%',
                        height: 150,
                        borderTopRightRadius: 8,
                        borderTopLeftRadius: 8
                    }}
                />
                <View style={{ padding: 10 }}>
                    <Text style={{ fontFamily: FONTS.bold, fontSize: 13, color: COLORS.light }}>{data.name}</Text>
                    <Text style={{ fontFamily: FONTS.regular, fontSize: 10, color: COLORS.gray }}>{data.address}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: 12, color: COLORS.gray, marginRight: 4 }}>{data.bedroom}</Text>
                            <Ionicons name="ios-bed-outline" size={14} style={{ color: COLORS.gray }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: 12, color: COLORS.gray, marginRight: 4 }}>{data.bath}</Text>
                            <MaterialCommunityIcons name="bathtub-outline" size={14} style={{ color: COLORS.gray }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: 12, color: COLORS.gray, marginRight: 4 }}>{data.sqft}</Text>
                            <MaterialCommunityIcons name="move-resize" size={14} style={{ color: COLORS.gray }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View>
                            <Text style={{ fontFamily: FONTS.medium, fontSize: 12, color: COLORS.light }}>Starting Price</Text>
                            <Text style={{ fontFamily: FONTS.bold, fontSize: 14, color: COLORS.primary }}>{data.price}</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={16} style={{ color: COLORS.gray }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default LatestProjectCard