import AppConstants from '../../App.constants';

import { IBillboardState, IBillboardAction } from '../../App.types';

const initialBillboard: IBillboardState = {
    fetched: false,
    fetching: true,
    movies: [
        {movieTitle: "The Help", movieGenres: ["Drama"], movieWatched: true, order: 1},
        {movieTitle: "Mean Girls", movieGenres: ["Comedy"], movieWatched: false, order: 2},
        {movieTitle: "Saw", movieGenres: ["Horror"], movieWatched: true, order: 3},
        {movieTitle: "Cloudy with a Chance of Meatballs", movieGenres: ["Animation"], movieWatched: false, order: 4}
    ]
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
                movies: [...state.movies, action.movie]
            };
        default:
            return {
                ...state
            };
    }
}

export default billboard;
