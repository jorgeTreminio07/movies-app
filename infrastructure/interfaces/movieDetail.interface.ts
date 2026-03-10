export interface MovieDetail {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  poster: string;
  rate: number;
  status: string;
  genres: generos[];
}

interface generos {
  id: number;
  name: string;
}
