import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from '../components/FocusedStatusBar';
import Header from '../components/Header';

const Profile = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
      <FocusedStatusBar backgroundColor={COLORS.darkCard} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <View>
            <Image
              source={require('../assets/images/avatar.png')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            />

            <TouchableOpacity style={{
              backgroundColor: COLORS.darkCard,
              padding: 10,
              borderRadius: 50,
              position: 'absolute',
              right: -5,
              top: 45
            }}
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Feather name="edit-3" size={14} color={COLORS.light} />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              color: COLORS.light,
              marginTop: 8
            }}>Reynan Decena</Text>
            <Text style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.font,
              color: COLORS.gray,
            }}>reynan.hello@gmail.com</Text>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>

          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.gray
          }}>Home Search</Text>

          <TouchableOpacity style={{
            marginTop: 16,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}
            onPress={() => navigation.navigate('RecentlyViewed')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#07B99910', padding: 10, borderRadius: 8, marginRight: 8 }}>
                <Feather name="eye" size={16} color={COLORS.primary} />
              </View>
              <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>Recently viewed</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.light} />
          </TouchableOpacity>

          <TouchableOpacity style={{
            marginTop: 16,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}
            onPress={() => navigation.navigate('FavoritesTab')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#07B99910', padding: 10, borderRadius: 8, marginRight: 8 }}>
                <Ionicons name="md-heart-outline" size={16} color={COLORS.primary} />
              </View>
              <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>My favourites</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.light} />
          </TouchableOpacity>

          <TouchableOpacity style={{
            marginTop: 16,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}
            onPress={() => navigation.navigate('PastTours')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#07B99910', padding: 10, borderRadius: 8, marginRight: 8 }}>
                <MaterialIcons name="tour" size={16} color={COLORS.primary} />
              </View>
              <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>Past tour</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.light} />
          </TouchableOpacity>

        </View>

        <View style={{ marginTop: 24 }}>

          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.gray
          }}>General</Text>

          <TouchableOpacity style={{
            marginTop: 16,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={() => navigation.navigate('AddProperty')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#07B99910', padding: 10, borderRadius: 8, marginRight: 8 }}>
                <FontAwesome5 name="laptop-house" size={16} color={COLORS.primary} />
              </View>
              <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>Sell my home</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.light} />
          </TouchableOpacity>

          <TouchableOpacity style={{ 
            marginTop: 16, 
            justifyContent: 'space-between', 
            flexDirection: 'row', 
            alignItems: 'center' 
          }}
            onPress={() => navigation.navigate('MyListings')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#07B99910', padding: 10, borderRadius: 8, marginRight: 8 }}>
                <MaterialIcons name="playlist-add-check" size={16} color={COLORS.primary} />
              </View>
              <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>My listings</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.light} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 16, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#07B99910', padding: 10, borderRadius: 8, marginRight: 8 }}>
                <Ionicons name="ios-settings-outline" size={16} color={COLORS.primary} />
              </View>
              <Text style={{ fontFamily: FONTS.medium, color: COLORS.light }}>Settings</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.light} />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile