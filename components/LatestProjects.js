import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES, propData } from '../constants';

import LatestProjectCard from './LatestProjectCard';

const LatestProjects = () => {
  const [propsData, setPropsData] = useState(propData);

  return (
    <View style={{marginTop:20}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text
                style={{fontFamily:FONTS.medium, fontSize:SIZES.medium, color:COLORS.light}}
            >Latest Projects</Text>
            <TouchableOpacity>
                <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, textTransform:'uppercase', color:COLORS.primary}}>See all</Text>
            </TouchableOpacity>           
        </View>      
        <FlatList
          data={propsData.slice(0,6)}
          renderItem={({ item }) => <LatestProjectCard data={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          
        />
    </View>
  )
}

export default LatestProjects