export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=1449ea5a&s=" + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function removeMovieFavorite(id) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: id,
  };
}

export function getMovieDetail(idMovie) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=1449ea5a&i=${idMovie}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: data });
      });
  };
}
