import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import readMovieQuery from '../queries/readMovie';
import ReviewCreate from './review-create';
import { Link } from 'react-router';

class MovieDetail extends Component {
  render() {
    if (this.props.readMovieQuery.loading) {
      return <div>Chargement ...</div>;
    }
    return (
      <div>
        <h1>Détail du film: {this.props.readMovieQuery.movie.title}</h1>
        <Link to='/movies'>Retour à la liste des films</Link>
        <ReviewCreate movieId={this.props.params.id} />
      </div>
    );
  }
}

export default compose(
  graphql(readMovieQuery, {
    name: 'readMovieQuery',
    options: props => {
      return {
        variables: { id: props.params.id }
      };
    }
  })
)(MovieDetail);
