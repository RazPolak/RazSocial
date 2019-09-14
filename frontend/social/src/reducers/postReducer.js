import {
  FETCH_POSTS,
  FETCH_LATEST_POST,
  FETCH_USER_POSTS,
  NEW_POST
} from "../actions/types";

const initalState = {
  items: [],
  item: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    case FETCH_USER_POSTS:
      return {
        ...state,
        items: action.payload
      };

    case FETCH_LATEST_POST:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        item: {}
      };

    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
