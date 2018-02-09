import * as actionTypes from './actionTypes';
import { getCategories } from '../../ReadableAPI';

export const fetchStart = () => { return { type: actionTypes.FETCH_CATEGORIES_START } }

export const fetchCategoriesSuccess = (data) => {
    return {
        type:actionTypes.FETCH_CATEGORIES_SUCCESS,
        data
    }
}

export const fetchCategoriesFail = (error) =>{
    return{
        type:actionTypes.FETCH_CATEGORIES_FAIL,
        error
    }
}

export const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchStart());
        getCategories()
        .then(data=>{
            console.log(data);
            if(data.categories){
                dispatch(fetchCategoriesSuccess(data.categories));
            }else{
                console.error('error data type:' + data);
                dispatch(fetchCategoriesSuccess([]));
            }
        })
        .catch(err=>{
            console.log(err);
            dispatch(fetchCategoriesFail(err));
        })
        
    }
}