import { 
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
} from '../actionTypes'

const initialState = {
  fetching: false,
  comments: [],
  errors: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COMMENTS: return { ...state, fetching: true, errors: [] };
    case FETCH_COMMENTS_FAILURE: return { ...state, fetching: false, errors: action.errors };
    case FETCH_COMMENTS_SUCCESS: return { ...state, fetching: false, comments: action.payload};
    case CREATE_COMMENT: return { ...state, fetching: true, errors: [] };
    case CREATE_COMMENT_FAILURE: return { ...state, fetching: false, errors: action.errors };
    case CREATE_COMMENT_SUCCESS: return { ...state, fetching: false, comments: [...state.comments, action.payload]};
    case DELETE_COMMENT: return { ...state, fetching: true, errors: [] };
    case DELETE_COMMENT_FAILURE: return { ...state, fetching: false, errors: action.errors };
    case DELETE_COMMENT_SUCCESS: return { ...state, fetching: false, comments: state.comments.filter(val => {
      return val._id !== action.payload._id
    })};
    default: return state
  }
}