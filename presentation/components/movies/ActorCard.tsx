import { Cast } from "@/infrastructure/interfaces/cast";
import { useState } from "react";
import { Image, Text, View } from "react-native";

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <View className="mx-10 w-[60px]">
      {loading && (
        <View className="absolute w-[100px] h-[150] rounded-2xl shadow bg-gray-300" />
      )}
      <Image
        source={{ uri: actor.Avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};
