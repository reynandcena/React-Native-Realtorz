import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { COLORS, SIZES, propData } from "../constants";

import FocusedStatusBar from '../components/FocusedStatusBar';
import Search from '../components/Search';
import PropertiesCard from '../components/PropertiesCard';

const SearchProperty = () => {

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

      <FlatList
        data={propsData}
        renderItem={({ item }) => <PropertiesCard data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Search onSearch={handleSearch} />}
      />

    </SafeAreaView>
  )
}

export default SearchProperty