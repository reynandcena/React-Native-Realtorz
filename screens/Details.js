import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, } from "../constants";
import Swiper from 'react-native-swiper';
import { Avatar, Button } from 'react-native-paper';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { MaterialIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import FocusedStatusBar from '../components/FocusedStatusBar';

const Details = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
            <FocusedStatusBar backgroundColor={COLORS.darkCard} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Swiper
                    autoplay={true}
                    style={{ height: 310, justifyContent: 'center', alignItems: 'center', borderRadius: 18 }}
                    dot={
                        <View
                            style={{
                                backgroundColor: 'rgba(255,255,255,.3)',
                                width: 28,
                                height: 4,
                                borderRadius: 7,
                                marginLeft: 7,
                                marginRight: 7,
                            }}
                        />
                    }
                    activeDot={
                        <View
                            style={{
                                backgroundColor: '#fff',
                                width: 28,
                                height: 4,
                                borderRadius: 7,
                                marginLeft: 7,
                                marginRight: 7
                            }}
                        />
                    }
                >

                    <View style={{ backgroundColor: COLORS.darkCard, padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                        <Image
                            source={require('../assets/images/Interior/1.jpg')}
                        />
                    </View>

                    <View style={{ backgroundColor: COLORS.darkCard, padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 18 }}>
                        <Image
                            source={require('../assets/images/Interior/2.jpg')} style={{ borderRadius: 18 }}
                        />
                    </View>

                    <View style={{ backgroundColor: COLORS.darkCard, padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 18 }}>
                        <Image
                            source={require('../assets/images/Interior/3.jpg')} style={{ borderRadius: 18 }}
                        />
                    </View>
                </Swiper>

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

                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.light }}>Single family residence</Text>
                    <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>1525 E Blue Spruce Rd, Derby, KS 67037</Text>
                </View>

                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>Features</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Icon size={34} icon="bathtub-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                            <View>
                                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.gray }}>Bathroom</Text>
                                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>2 Rooms</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Icon size={34} icon="bed-double-outline" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                            <View>
                                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.gray }}>Bedroom</Text>
                                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>3 Rooms</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Icon size={34} icon="move-resize" color='#98989F' style={{ borderRadius: 8, backgroundColor: '#262B2E', marginRight: 4 }} />
                            <View>
                                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.gray }}>Square</Text>
                                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light }}>1,880 Ft</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>About</Text>
                    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.light, marginTop: 8 }}>
                        This ranch style 3-bedroom 2 bath home is the perfect oasis located right outside of Wamego. Tons of space on this property with 1.3 acres of land. This home features generous bedrooms, hardwoods, celling fans, brand new roof in 2021, and tons of storage areas. Outside you will find a large basketball court, well established landscaping/trees, and plenty of space for entertaining. Also included on the property is 2 custom utility sheds with electricity and one includes a kennel with ac/heat.
                    </Text>
                </View>

                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>Location</Text>
                    <View style={{ marginTop: 8 }}>
                        <MapView
                            style={{ width: '100%', height: 150 }}
                            showsUserLocation={true}
                            initialRegion={{
                                latitude: 37.54386425416644,
                                longitude: -97.24861099101827,
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
                </View>

                <View style={{ marginTop: 24, borderWidth: 1, borderColor: COLORS.overlay, padding: 20, borderRadius: 8 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>Contact Agent</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                        <Image
                            source={require('../assets/images/avatar-woman.jpg')}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                marginRight: 8
                            }}
                        />
                        <View>
                            <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>Alexa Lorraine Decena</Text>
                            <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.gray }}>ALD Capital Properties LLC</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                        <Button icon="chat-processing-outline" mode="contained" onPress={() => console.log('Message')} style={{ width: 135, backgroundColor: COLORS.darkCard }}>
                            Message
                        </Button>
                        <Button icon="phone-outline" mode="contained" onPress={() => console.log('Call')} style={{ width: 135, backgroundColor: COLORS.darkCard }}>
                            Call
                        </Button>
                    </View>
                    <View>
                        <Button icon="chat-question-outline" mode="contained" onPress={() => console.log('Ask questions')} style={{ marginTop: 8, backgroundColor: COLORS.darkCard }}>
                            Ask Questions
                        </Button>
                    </View>
                </View>

                <View style={{ marginTop: 24 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>Key Details</Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.gray }}>Update: 12/22/2022 5:00PM</Text>
                    </View>
                    <Text style={{ marginTop: 24, fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>Price Insights</Text>
                    <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>List Price</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>$3,000</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Est. Mo. Payment</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>$15,000</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Estimate</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>$3,000</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Price/Sq. Ft</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>$1,940</Text>
                    </View>
                </View>

                <View style={{ marginTop: 8 }}>
                    <Text style={{ marginTop: 8, fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light }}>Home Facts</Text>
                    <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>On Market</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>30 days</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Community</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>Kansas City</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Country</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>Kansas City</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>MLS#</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>42212314554</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Built</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>1992</Text>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>Lot Size</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: COLORS.light }}>3,400 square feet</Text>
                    </View>
                </View>

                <View style={{ height: 1, backgroundColor: COLORS.overlay, marginTop: 24, marginBottom: 24 }} />

                <View>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light, marginBottom: 16 }}>Popular Amenities</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.darkCard,
                            padding: 16,
                            borderRadius: 8,
                            marginRight: 12,
                            width: 140
                        }}>
                            <MaterialIcons name="child-care" size={24} color={COLORS.light} />
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginTop: 8 }}>Child Daycare</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.darkCard,
                            padding: 16,
                            borderRadius: 8,
                            marginRight: 12,
                            width: 140
                        }}>
                            <MaterialIcons name="bike-scooter" size={24} color={COLORS.light} />
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginTop: 8 }}>Bike Racks</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.darkCard,
                            padding: 16,
                            borderRadius: 8,
                            marginRight: 12,
                            width: 140
                        }}>
                            <Ionicons name="ios-fitness-outline" size={24} color={COLORS.light} />
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginTop: 8 }}>Fitness Facility</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.darkCard,
                            padding: 16,
                            borderRadius: 8,
                            marginRight: 12,
                            width: 140
                        }}>
                            <FontAwesome name="hospital-o" size={24} color={COLORS.light} />
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginTop: 8 }}>Hospitals</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.darkCard,
                            padding: 16,
                            borderRadius: 8,
                            marginRight: 12,
                            width: 140
                        }}>
                            <MaterialCommunityIcons name="run" size={24} color={COLORS.light} />
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginTop: 8 }}>Jogging Track</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.darkCard,
                            padding: 16,
                            borderRadius: 8,
                            marginRight: 12,
                            width: 140
                        }}>
                            <MaterialCommunityIcons name="table-picnic" size={24} color={COLORS.light} />
                            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray, marginTop: 8 }}>Picnic Area</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ height: 1, backgroundColor: COLORS.overlay, marginTop: 24, marginBottom: 24 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font, color: COLORS.light, marginBottom: 16 }}>Reviews</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.primary }}>View All Reviews</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: FONTS.semiBold, fontSize: 24, color: COLORS.light }}>4.9</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 8, marginRight: 8 }}>
                        <FontAwesome name="star" size={16} color={COLORS.primary} style={{ marginRight: 4 }} />
                        <FontAwesome name="star" size={16} color={COLORS.primary} style={{ marginRight: 4 }} />
                        <FontAwesome name="star" size={16} color={COLORS.primary} style={{ marginRight: 4 }} />
                        <FontAwesome name="star" size={16} color={COLORS.primary} style={{ marginRight: 4 }} />
                        <FontAwesome name="star-half-full" size={16} color={COLORS.primary} />
                    </View>
                    <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.small, color: COLORS.gray }}>100 ratings</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>5</Text>
                    <View style={{ width: '80%', height: 4, backgroundColor: COLORS.darkCard }}>
                        <View style={{ width: '60%', height: 4, backgroundColor: COLORS.primary }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>60%</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>4</Text>
                    <View style={{ width: '80%', height: 4, backgroundColor: COLORS.darkCard }}>
                        <View style={{ width: '20%', height: 4, backgroundColor: COLORS.primary }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>20%</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>3</Text>
                    <View style={{ width: '80%', height: 4, backgroundColor: COLORS.darkCard }}>
                        <View style={{ width: '10%', height: 4, backgroundColor: COLORS.primary }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>10%</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>2</Text>
                    <View style={{ width: '80%', height: 4, backgroundColor: COLORS.darkCard }}>
                        <View style={{ width: '5%', height: 4, backgroundColor: COLORS.primary }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>5%</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>1</Text>
                    <View style={{ width: '80%', height: 4, backgroundColor: COLORS.darkCard }}>
                        <View style={{ width: '5%', height: 4, backgroundColor: COLORS.primary }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>5%</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                    <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.light }}>Price:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.primary }}>$1,940.00</Text>
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.light }}>/month</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent:'space-between', marginTop:24 }}>
                    <TouchableOpacity style={{backgroundColor:COLORS.darkCard, padding:8, borderRadius:8, paddingHorizontal:10}}>
                        <MaterialCommunityIcons name="cards-heart-outline" size={24} color={COLORS.light} />
                    </TouchableOpacity>
                    <Button mode="contained" style={{ backgroundColor: COLORS.primary, borderRadius: 8, width:'85%' }} onPress={() => console.log('Schedule a Tour')} uppercase={false}>
                        Schedule a Tour
                    </Button>
                </View>
            </ScrollView>




        </SafeAreaView>
    )
}

export default Details