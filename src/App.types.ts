export interface IAppState {
    billboard: IBillboardState
}

export interface IBillboardState {
    fetched: boolean,
    fetching: boolean,
    movies: Array<IMovie>,
    searchedMovie: string
}

export interface IMovie {
    movieTitle: string,
    movieGenres: Array<string>,
    movieWatched: boolean,
    order: number
}

export interface INewMovieData {
    movieTitle: string,
    movieGenres: Array<string>
}

export interface IBillboardAction {
    type: string,
    movie?: IMovie,
    movies?: Array<IMovie>,
    searchedMovie?: string
}