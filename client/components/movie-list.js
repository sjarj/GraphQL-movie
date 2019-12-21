import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';

class MovieList extends Component {
  rendrMovies() {
    if (!this.props.data.loading) {
      return this.props.data.movies.map(movie => {
        return (
          <li className='collection-item' key={movie.id}>
            {movie.title}
          </li>
        );
      });
    } else {
      return <div>Loading....</div>;
    }
  }

  render() {
    return (
      <div>
        <h1>Liste de film</h1>
        <ul className='collection'>{this.rendrMovies()}</ul>
        <Link
          to='/movies/create'
          className='btn-floating btn-large waves-effect waves-light blue right'
        >
          <i className='material-icons'>add</i>
        </Link>
      </div>
    );
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
