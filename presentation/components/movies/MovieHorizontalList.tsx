import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  tittle?: string;
  movie: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  movie,
  tittle,
  className,
  loadNextPage,
}: Props) => {
  const isloading = useRef(false);

  useEffect(() => {
    isloading.current = false;
  }, [movie]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isloading.current) return;

    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

    // prettier-ignore
    const isEndReached =
      (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if (!isEndReached) return;

    isloading.current = true;

    loadNextPage && loadNextPage();
  };

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
        keyExtractor={(item, i) => `${item.id} -${i}`}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default MovieHorizontalList;
