import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  tittle?: string;
  movie: Movie[];
}

const MovieHorizontalList = ({ movie, tittle }: Props) => {
  return (
    <View className="mb-2">
      {tittle && <Text className="text-xl font-bold px-4 mb-4">{tittle}</Text>}

      <FlatList
        horizontal
        data={movie}
        renderItem={(item) => (
          <MoviePoster
            id={item.item.id}
            poster={item.item.poster}
            smallPoster={true}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default MovieHorizontalList;
