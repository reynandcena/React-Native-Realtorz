import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { COLORS, SIZES, ChatData } from "../constants";

import FocusedStatusBar from '../components/FocusedStatusBar';
import ChatCard from '../components/ChatCard';
import Header from '../components/Header';

const Messages = () => {

  const [chatsData, setChatsData] = useState(ChatData);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkBG, height: '100%', padding: SIZES.large }}>
      <FocusedStatusBar backgroundColor={COLORS.darkCard} />
        <FlatList
          data={chatsData}
          renderItem={({ item }) => <ChatCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Header/>}
        />
    </SafeAreaView>
  )
}

export default Messages