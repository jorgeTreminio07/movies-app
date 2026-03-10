import { nowPLayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedAction } from "@/core/actions/movies/top-rated.action";
import { upComingAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const upcomigingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upComingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      return topRatedAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, //24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });

  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPLayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomigingQuery,
  };
};
