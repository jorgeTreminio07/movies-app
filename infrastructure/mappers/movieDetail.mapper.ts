import { MovieDetail } from "../interfaces/movieDetail.interface";
import { TopLevel } from "../interfaces/movieDetail.interface-Response";

export class MovieDetailMapper {
  static MovieDetailMapper = (movie: TopLevel): MovieDetail => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      rate: movie.vote_average,
      status: movie.status,
      genres: movie.genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      })),
    };
  };
}
