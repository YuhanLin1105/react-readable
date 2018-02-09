import * as actionTypes from '../actions/actionTypes';

const initalState = {
    comments: null,
    loading: false,
    error: null
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default reducer;