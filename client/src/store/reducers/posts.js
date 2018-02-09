import * as actionTypes from '../actions/actionTypes';


const initialState = {
    posts: null,
    loading: false,
    error: null,
}
// const updateObject = (oldObject, updatedProperties) => {
//     return {
//         ...oldObject,
//         ...updatedProperties
//     };
// };


const fetchStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const fetchPostsAllSuccess = (state, action) => {
    return {
        ...state,
        posts: action.data,
        loading: false
    }
}

const fetchPostsCategorySuccess = (state, action) => {
    return {
        ...state,
        posts: action.data,
        loading: false
    }
}

const fetchFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: true
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START: return fetchStart(state, action);
        case actionTypes.FETCH_POSTS_FAIL: return fetchFail(state, action);
        case actionTypes.FETCH_POSTS_ALL_SUCCESS: return fetchPostsAllSuccess(state, action);
        case actionTypes.FETCH_POSTS_CATEGORY_SUCCESS: return fetchPostsCategorySuccess(state, action);
        default: return state;
    }
};

export default reducer;