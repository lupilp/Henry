import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import "./Buscador.css";

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

// props = {movies: estado global de moviesLoaded}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>

        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies.map((pelicula) => {
            return (
              <li key={pelicula.imdbID}>
                <Link to={`/movie/${pelicula.imdbID}`}>
                  <span>{pelicula.Title}</span>
                </Link>
                <button
                  onClick={() =>
                    this.props.addMovieFavorite({
                      Title: pelicula.Title,
                      id: pelicula.imdbID,
                    })
                  }
                >
                  Fav
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
