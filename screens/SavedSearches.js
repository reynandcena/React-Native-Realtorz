import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { COLORS, SIZES, propData } from "../constants";

import FocusedStatusBar from '../components/FocusedStatusBar';
import PropertiesCard from '../components/PropertiesCard';

const SavedSearches = () => {

  const [propsData, setPropsData] = useState(propData);

  return (
    <View>
      <Text>Saved Searches</Text>
    </View>
  )
}

export default SavedSearches