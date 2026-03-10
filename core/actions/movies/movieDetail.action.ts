import { movieapi } from "@/core/api/movie-api";
import { TopLevel } from "@/infrastructure/interfaces/movieDetail.interface-Response";
import { MovieDetailMapper } from "@/infrastructure/mappers/movieDetail.mapper";

export const movieDetailAction = async (id: number) => {
  try {
    const { data } = await movieapi.get<TopLevel>(`/${id}`);

    const movie = MovieDetailMapper.MovieDetailMapper(data);

    return movie;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
