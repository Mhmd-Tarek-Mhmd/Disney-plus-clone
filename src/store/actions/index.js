import { signIn, signOut } from "./auth";
import { getMovies } from "./movies";

function handleGetMovies() {
  return (dispatch) => {
    fetch("/utils/data.json")
      .then((res) => res.json())
      .then((data) => dispatch(getMovies(data)));
  };
}

export { signIn, signOut, handleGetMovies };
