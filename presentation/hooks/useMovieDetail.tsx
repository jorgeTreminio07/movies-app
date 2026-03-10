import { getMovieCastAction } from "@/core/actions/movies/getMovieCastAction";
import { movieDetailAction } from "@/core/actions/movies/movieDetail.action";
import { useQuery } from "@tanstack/react-query";

export const useMovieDetail = (id: number) => {
  const movieDetailQuery = useQuery({
    queryKey: ["movies", id],
    queryFn: () => movieDetailAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castDetailQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { movieDetailQuery, castDetailQuery };
};
