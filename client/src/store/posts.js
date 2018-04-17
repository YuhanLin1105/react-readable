import { getPostsAll, getCategoryPosts, getPostById } from "../ReadableAPI";

//=========================
//CONSTANTS
//=========================

const FETCH_POSTS_START = "FETCH_POSTS_START";
const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL";
const FETCH_POSTS_ALL = "FETCH_POSTS_ALL";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCESS";

const FETCH_POSTS_ALL_SUCCESS = "FETCH_POSTS_ALL_SUCCESS";
const FETCH_POSTS_CATEGORY_SUCCESS = "FETCH_POSTS_CATEGORY_SUCCESS";
const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";

//=========================
//Action creator
//=========================

const fetchStart = () => {
  return { type: FETCH_POSTS_START };
};

const fetchSuccess = data => {
  return {
    type: FETCH_POSTS_SUCCESS,
    data
  };
};
const fetchFail = err => {
  return {
    type: FETCH_POSTS_FAIL,
    error: err
  };
};

const fetchPostsAll = () => {
  console.log("fetchPostsAll");
  return dispatch => {
    dispatch(fetchStart());
    console.log("fetchStart");
    getPostsAll()
      .then(data => {
        // console.log(data);
        dispatch(fetchSuccess(data));
      })
      .catch(err => {
        // console.error(err);
        dispatch(fetchFail(err));
      });
  };
};

const fetchPostsCategory = category => {
  return dispatch => {
    dispatch(fetchStart());
    getCategoryPosts(category)
      .then(data => {
        // console.log(data);
        dispatch(fetchSuccess(data));
      })
      .catch(err => {
        // console.error(err);
        dispatch(fetchFail(err));
      });
  };
};

const fetchPost = postId => {
  return dispatch => {
    dispatch(fetchStart());
    getPostById(postId)
      .then(data => {
        console.log("getPostById:" + data);
        dispatch(fetchSuccess(data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFail(err));
      });
  };
};

export const actionCreator = {
  fetchPostsAll,
  fetchPostsCategory,
  fetchPost
};

//=========================
// Reducer
//=========================

const initialState = {
  posts: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.data,
        loading: false
      };
    default:
      return state;
  }
};
