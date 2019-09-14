import { LOGIN, LOGOUT, SIGNUP } from "../actions/types";

const initalState = {
  isLogged: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        isLogged: action.payload
      };

    case SIGNUP:
      return {
        ...state,
        isLogged: action.payload
      };

    default:
      return state;
  }
}
