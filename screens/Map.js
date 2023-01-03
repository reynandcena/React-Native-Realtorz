import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';

const Map = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', }}>
            <FocusedStatusBar backgroundColor={COLORS.darkCard} />

            <View>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 38.954868556551375,
                        longitude: -94.64689915039341,
                        latitudeDelta: 0.2922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 38.954868556551375,
                            longitude: -94.64689915039341,
                        }}
                    />
                </MapView>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.darkCard,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    position: 'absolute',
                    top: 20,
                    left: 20
                }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} style={{ color: COLORS.light }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map