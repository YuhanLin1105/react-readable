import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: null,
    loading: false,
    error: null
}

const fetchStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const fetchSuccess = (state, action) => {
    return {
        ...state,
        categories: action.data,
        loading: false
    }
}

const fetchFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_START: return fetchStart(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchFail(state, action);
        default:return state;
    }
}

export default reducer;