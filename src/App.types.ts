export interface IAppState {
    billboard: IBillboardState
}

export interface IBillboardState {
    fetched: boolean,
    fetching: boolean,
    movies: Array<IMovie>
}

export interface IMovie {
    movieTitle: string,
    movieGenres: Array<string>,
    movieWatched: boolean,
    order: number
}

export interface IBillboardAction {
    type: string
}