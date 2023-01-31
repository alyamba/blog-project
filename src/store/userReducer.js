const defaultState = {
  email: null,
  id: null,
};

const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('state: ', action);
      return { ...state, ...action.payload };
    case REMOVE_USER:
      console.log(state);
      return defaultState;
    default:
      return state;
  }
};

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
