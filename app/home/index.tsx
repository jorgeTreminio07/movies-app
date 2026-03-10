import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomigingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1 bg-slate-900">
        <ActivityIndicator color="white" size={50} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ marginTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mt-2">MoviesApp</Text>
        {/*now playing movies*/}
        <MainSlideShow movie={nowPlayingQuery.data ?? []} />

        {/*popular movies*/}
        <MovieHorizontalList
          tittle="Populares"
          movie={popularQuery.data ?? []}
        />

        {/*mejor calificados*/}
        <MovieHorizontalList
          tittle="Mejor calificados"
          movie={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/*proximamente en cines*/}
        <MovieHorizontalList
          tittle="Proximamente"
          movie={upcomigingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
