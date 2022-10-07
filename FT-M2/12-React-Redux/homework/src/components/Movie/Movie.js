import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>{this.props.movieDetail.Title}</h1>
        <h2>{this.props.movieDetail.Genre}</h2>
        <p>{this.props.movieDetail.Plot}</p>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
