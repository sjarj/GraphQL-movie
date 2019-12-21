import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class MovieList extends Component {
  rendrMovies() {
    if (!this.props.data.loading) {
      return this.props.data.movies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>;
      });
    } else {
      return <div>Loading....</div>;
    }
  }

  render() {
    return <ul>{this.rendrMovies()}</ul>;
  }
}
const query = gql`
  {
    movies {
      id
      title
    }
  }
`;

export default graphql(query)(MovieList);
