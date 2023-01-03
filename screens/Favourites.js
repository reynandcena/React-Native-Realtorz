import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { COLORS, SIZES, propData } from "../constants";

import FocusedStatusBar from '../components/FocusedStatusBar';
import PropertiesCard from '../components/PropertiesCard';
import Header from '../components/Header';

const Favourites = () => {

  const [propsData, setPropsData] = useState(propData);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
      <FocusedStatusBar backgroundColor={COLORS.darkCard} />

      <FlatList
        data={propsData.slice(0, 6)}
        renderItem={({ item }) => <PropertiesCard data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header />}
      />
    </SafeAreaView>

  )
}

export default Favourites