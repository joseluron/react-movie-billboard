import AppConstants from '../../App.constants';

import { IBillboardState, IBillboardAction } from '../../App.types';

const initialBillboard: IBillboardState = {
    fetched: false,
    fetching: true,
    movies: [
        {movieTitle: "The Help", movieGenres: ["Drama"], movieWatched: true, order: 1},
        {movieTitle: "Mean Girls", movieGenres: ["Comedy"], movieWatched: false, order: 2}
    ]
};

const billboard = (state = initialBillboard, action: IBillboardAction) => {
    switch (action.type) {
        case AppConstants.BILLBOARD_FETCHING:
            return {
                ...state,
                fetching: true,
            }
        case AppConstants.BILLBOARD_FETCHED_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true
            }
        default:
            return {
                ...state
            }
    }
}

export default billboard;
