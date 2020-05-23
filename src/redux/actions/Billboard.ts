import { Store, AnyAction } from 'redux';

import AppConstants from '../../App.constants';

const fetchBillboard = (): AnyAction => {
    return {
        type: AppConstants.BILLBOARD_FETCHING
    }
}

const fetchedBillboard = (): AnyAction => {
    return {
        type: AppConstants.BILLBOARD_FETCHED_SUCCESS
    }
}

export const getBillboard = () => (dispatch: Store['dispatch']) => {
    dispatch(fetchBillboard());
    setTimeout(() => {
        dispatch(fetchedBillboard());
    }, 3000);
}
