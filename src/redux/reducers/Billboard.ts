import AppConstants from '../../App.constants';

import { IBillboardState, IBillboardAction } from '../../App.types';

const initialBillboard: IBillboardState = {
    fetched: false,
    fetching: true,
    movies: [
        {movieTitle: "The Help", movieGenres: ["drama"], movieWatched: true, order: 1},
        {movieTitle: "Mean Girls", movieGenres: ["comedy"], movieWatched: false, order: 2},
        {movieTitle: "Saw", movieGenres: ["horror"], movieWatched: true, order: 3},
        {movieTitle: "Cloudy with a Chance of Meatballs", movieGenres: ["animation", "bonito"], movieWatched: false, order: 4}
    ],
    searchedMovie: ''
};

const billboard = (state = initialBillboard, action: IBillboardAction) => {
    switch (action.type) {
        case AppConstants.BILLBOARD_FETCHING:
            return {
                ...state,
                fetching: true,
            };
        case AppConstants.BILLBOARD_FETCHED_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true
            };
        case AppConstants.ADD_MOVIE:
            return {
                ...state,
                fetching: true
            };
        case AppConstants.ADDED_MOVIE_SUCCESS:
            return {
                ...state,
                fetching: false,
                movies: [...state.movies, action.movie],
                searchedMovie: ''
            };
        case AppConstants.DELETE_MOVIE:
            return {
                ...state,
                fetching: true
            };
        case AppConstants.DELETED_MOVIE_SUCCESS:
            return {
                ...state,
                fetching: false,
                movies: action.movies,
                searchedMovie: ''
            };
        case AppConstants.SEARCH_MOVIE:
            return {
                ...state,
                fetching: true
            };
        case AppConstants.SEARCHED_MOVIE_SUCCESS:
            return {
                ...state,
                fetching: false,
                searchedMovie: action.searchedMovie
            };
        default:
            return {
                ...state
            };
    }
}

export default billboard;
