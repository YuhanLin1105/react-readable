import * as actionTypes from './actionTypes';
import * as ReadbleAPI from '../../ReadableAPI';



export const fetchStart = () =>{ return{ type: actionTypes.FETCH_POSTS_ALL_START } };

export const fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POSTS_ALL_SUCCESS,
        data
    }
}

export const fetchFail = (err) => {
    return {
        type: actionTypes.FETCH_POSTS_ALL_FAIL,
        error: err
    }
}

export const fetchPostsAll = () => {
    return dispatch => {
        dispatch(fetchStart());
        ReadbleAPI.getPostsAll()
            .then(data => {
                console.log(data);
                dispatch(fetchSuccess(data));
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchFail());
            })
    }
}