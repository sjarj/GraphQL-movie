import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import readMoviesQuery from '../queries/readMovies';
import deleteMovieMutation from '../queries/deleteMovie';
import { Link } from 'react-router';

class MovieList extends Component {
  rendrMovies() {
    if (!this.props.readMoviesQuery.loading) {
      return this.props.readMoviesQuery.movies.map(movie => {
        return (
          <li className='collection-item' key={movie.id}>
            {movie.title}
            <i
              className='material-icons secondary-content delete_button'
              onClick={() => this.onDeleteMovie(movie.id)}
            >
              delete
            </i>
          </li>
        );
      });
    } else {
      return <div>Loading....</div>;
    }
  }

  onDeleteMovie(id) {
    this.props
      .deleteMovieMutation({
        variables: {
          id
        }
      })
      .then(() => this.props.readMoviesQuery.refetch());
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

export default compose(
  graphql(readMoviesQuery, { name: 'readMoviesQuery' }),
  graphql(deleteMovieMutation, { name: 'deleteMovieMutation' })
)(MovieList);
