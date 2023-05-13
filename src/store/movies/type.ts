export interface MovieState {
  title: string;
  episode_id: number;
  release_date: string;
  opening_crawl:string;
  director: string;
  producer: string;
}
export interface MovieDetailState{
  Title: string;
  Poster:string;
  Plot:string;
  Ratings: Array<{Source:string;Value:string}>;
  Director:string;
  Description :string;
}

export interface MovieListState {
  loading:boolean;
  movies :Array<MovieState>;
  movieDetail:MovieDetailState;
  error:null;
  searchTerm :string;
}
