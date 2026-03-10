import { Cast } from "@/infrastructure/interfaces/cast";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { CastSkeleton } from "../castSkeletons";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
  isLoading: boolean;
}

const MovieCast = ({ cast, isLoading }: Props) => {
  return (
    <View className="mt-5 mb-20">
      <Text className="font-bold text-2xl px-5 mb-5">Actores</Text>

      {isLoading ? (
        <FlatList
          data={Array.from({ length: 6 })}
          renderItem={() => <CastSkeleton />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ActorCard actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MovieCast;
