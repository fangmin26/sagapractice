import { GET_USERS_SUCCESS } from "./actions";

const initial_state = {
  users: [],
};

const reducers = (state = initial_state, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      //...state는 초기빈값, action.users는 받아오는값
      return { ...state, users: action.users };
    default:
      return state;
  }
};
export default reducers;
