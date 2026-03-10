import { movieapi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieapi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page: page,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
