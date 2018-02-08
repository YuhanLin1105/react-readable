import * as actionTypes from '../actions/actionTypes';

initialState={
    categories:null,
    loading:false,
    error:null
}

const fetchStart = (state,action) =>{
    return{
        ...state,
        ['loading']:true
    }
}



const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_CATEGORIES_START:
            return fetchStart(state,action);


    }
}