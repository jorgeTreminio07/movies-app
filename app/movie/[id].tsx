import MovieCast from "@/presentation/components/movies/MovieCast";
import { useMovieDetail } from "@/presentation/hooks/useMovieDetail";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieDetailQuery, castDetailQuery } = useMovieDetail(Number(id));

  const width = useWindowDimensions().width;

  const { height: screenHeight } = useWindowDimensions();
  if (movieDetailQuery.isLoading)
    return <ActivityIndicator color="purple" size={30} />;

  return (
    <ScrollView className="mb-10">
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.1)", "transparent"]}
        start={[0, 0]}
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: screenHeight * 0.4,
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 35,
          left: 10,
          zIndex: 99,
          elevation: 9,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={50}
            color="white"
            className="shadow"
          ></Ionicons>
        </Pressable>
      </View>
      <Image
        source={{ uri: movieDetailQuery.data?.poster }}
        className={`shadow-lg rounded-2xl w-full h-full `}
        style={{
          width: width,
          height: screenHeight * 0.7,
          shadowColor: "#000",
        }}
      />
      <View className="px-5">
        <Text className="text-4xl font-bold mb-1 mt-2">
          {movieDetailQuery.data?.title}
        </Text>
        <View className="flex-row">
          <Text className="text-gray-500 text-xl">{`${movieDetailQuery.data?.rate} - `}</Text>
          <Text className="text-gray-500 text-xl">
            {movieDetailQuery.data?.genres
              .map((genre) => genre.name)
              .join(", ")}
          </Text>
        </View>
        <Text className="font-bold text-2xl mt-4">Historia</Text>
        <Text>{movieDetailQuery.data?.description}</Text>
      </View>

      <MovieCast
        cast={castDetailQuery.data ?? []}
        isLoading={castDetailQuery.isLoading}
      />
    </ScrollView>
  );
};

export default MovieScreen;
