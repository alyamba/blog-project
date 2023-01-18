const defaultState = {
  postList: [],
};

const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

export const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, postList: [action.payload, ...state.postList] };
    case REMOVE_POST:
      return { ...state };
    default:
      return state;
  }
};

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});
