import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from "../constants";
import { useNavigation } from '@react-navigation/native';

const ChatCard = ({ data }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}
            onPress={() => navigation.navigate('ChatWindow')}
        >
            <View style={{ marginRight: 12 }}>
                <Image
                    source={data.image}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                    }}
                />
                <View style={{ width: 12, height: 12, borderRadius: 100, backgroundColor: COLORS.primary, position: 'absolute', bottom: 10, right: 2, borderWidth: 1, borderColor: COLORS.light }} />
            </View>
            <View>
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>{data.name}</Text>
                <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.small, color: COLORS.gray, width: 270 }}>{data.message}</Text>
                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.gray }}>{data.time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatCard