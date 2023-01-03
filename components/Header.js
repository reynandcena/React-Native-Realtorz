import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <AntDesign
            name="menu-fold"
            size={24}
            style={{ color: COLORS.gray }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginRight: 16 }}
            onPress={() => navigation.navigate("Notifications")}
          >
            <FontAwesome5
              name="bell"
              size={24}
              style={{ color: COLORS.gray }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 100,
                backgroundColor: COLORS.primary,
                position: "absolute",
                top: 3,
                left: 13,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <MaterialCommunityIcons
              name="map-marker-radius-outline"
              size={24}
              style={{ color: COLORS.gray }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
