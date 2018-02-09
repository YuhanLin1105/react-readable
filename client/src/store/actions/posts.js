import * as actionTypes from './actionTypes';
import { getPostsAll, getCategoryPosts } from '../../ReadableAPI';



export const fetchStart = () => { return { type: actionTypes.FETCH_POSTS_START } };

export const fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POSTS_ALL_SUCCESS,
        data
    }
}

export const fetchFail = (err) => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error: err
    }
}

export const fetchPostsAll = () => {
    return dispatch => {
        dispatch(fetchStart());
        getPostsAll()
            .then(data => {
                // console.log(data);
                dispatch(fetchSuccess(data));
            })
            .catch(err => {
                // console.error(err);
                dispatch(fetchFail());
            })
    }
}

export const fetchPostsCategory = (category) => {
    return dispatch => {
        dispatch(fetchStart());
        getCategoryPosts(category)
            .then(data => {
                // console.log(data);
                dispatch(fetchSuccess(data));
            })
            .catch(err => {
                // console.error(err);
                dispatch(fetchFail());
            })
    }
}
