import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
// import { Link } from 'react-router-dom';
import "./Favorites.css";

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies.map((pelicula) => {
            return (
              <li key={pelicula.imdbID}>
                {" "}
                <span>{pelicula.Title}</span>{" "}
                <button
                  onClick={() => this.props.removeMovieFavorite(pelicula.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
