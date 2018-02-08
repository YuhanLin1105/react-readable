import * as actionTypes from './actionTypes';
import { getCategories } from '../../ReadableAPI';

const fetchStart = () => { return { type: actionTypes.FETCH_CATEGORIES_START } }

const fetchCategoriesSuccess = (data) => {
    return {
        type:actionTypes.FETCH_CATEGORIES_SUCCESS,
        data
    }
}

const fetchCategoriesFail = (error) =>{
    return{
        type:actionTypes.FETCH_CATEGORIES_FAIL,
        error
    }
}

const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchStart());
        getCategories()
        .then(data=>{
            console.log(data);
            dispatch(fetchCategoriesSuccess(data));
        })
        .catch(err=>{
            console.log(err);
            dispatch(fetchCategoriesFail(err));
        })
        
    }
}