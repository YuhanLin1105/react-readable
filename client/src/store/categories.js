import { getCategories } from "../ReadableAPI";

//=========================
//CONSTANTS
//=========================

export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_FAIL = "FETCH_CATEGORIES_FAIL";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

//=========================
//Action creators
//=========================
const fetchCategoriesStart = () => {
  return {
    type: FETCH_CATEGORIES_START
  };
};

const fetchCategoriesSuccess = data => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    data
  };
};

const fetchCategoriesFail = error => {
  return {
    type: FETCH_CATEGORIES_FAIL,
    error
  };
};

const fetchCategories = () => {
  return dispatch => {
    dispatch(fetchCategoriesStart());
    getCategories()
      .then(data => {
        if (data.categories) {
          dispatch(fetchCategoriesSuccess(data.categories));
        } else {
          console.error("error data type:" + data);
          dispatch(fetchCategoriesSuccess([]));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchCategoriesFail(err));
      });
  };
};

export const actionCreator = {
  fetchCategories,
  fetchCategoriesStart,
  fetchCategoriesFail,
  fetchCategoriesSuccess
};

//=========================
// Reducer
//=========================

const initialState = {
  categories: null,
  loading: false,
  error: null
};

const fetchStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const fetchSuccess = (state, action) => {
  return {
    ...state,
    categories: action.data,
    loading: false
  };
};

const fetchFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return fetchStart(state, action);
    case FETCH_CATEGORIES_SUCCESS:
      return fetchSuccess(state, action);
    case FETCH_CATEGORIES_FAIL:
      return fetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
