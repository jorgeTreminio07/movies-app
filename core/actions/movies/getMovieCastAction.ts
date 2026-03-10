import { movieapi } from "@/core/api/movie-api";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/movieDb-credits.response";
import { CastMapper } from "@/infrastructure/mappers/castMapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieapi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`,
    );

    const cast = data.cast.map(CastMapper.fromCastDBToEntity);

    return cast;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
