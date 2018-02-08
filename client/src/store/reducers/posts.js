import * as actionTypes from '../actions/actionTypes';


const initialState={
    posts:null,
    loading:false,
    error:null,
}
// const updateObject = (oldObject, updatedProperties) => {
//     return {
//         ...oldObject,
//         ...updatedProperties
//     };
// };


const fetchStart=(state,action)=>{
    return{
        ...state,
        ['loading']:true
    }
}

const fetchPostsAllSuccess=(state,action)=>{
    return{
        ...state,
        ['posts']:action.data
    }
}

const fetchFail=(state,action)=>{
    return{
        ...state,
        ['error']:action.error,
        ['loading']:true
    }
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_POSTS_ALL_START: return fetchStart( state, action );
        case actionTypes.FETCH_POSTS_ALL_SUCCESS: return fetchPostsAllSuccess( state, action );
        case actionTypes.FETCH_POSTS_ALL_FAIL: return fetchFail( state, action );
        // case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart( state, action );
        // case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess( state, action )
        // case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail( state, action );
        // case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state, action );
        // case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
        // case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state, action );
        default: return state;
    }
};

export default reducer;