import { GET_MOVIES } from "../actions/movies";

export default function movies(state = {}, action) {
  switch (action.type) {
    case GET_MOVIES:
      return action.movies;

    default:
      return state;
  }
}
