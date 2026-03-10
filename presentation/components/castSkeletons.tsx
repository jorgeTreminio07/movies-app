import React from "react";
import { View } from "react-native";

export const CastSkeleton = () => {
  return (
    <View className="mx-3 items-center">
      <View className="w-24 h-24 bg-gray-300 rounded-full mb-2" />
      <View className="w-20 h-4 bg-gray-300 rounded mb-1" />
      <View className="w-16 h-3 bg-gray-200 rounded" />
    </View>
  );
};
