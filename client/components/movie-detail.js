import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import readMovieQuery from '../queries/readMovie';

class MovieDetail extends Component {
  render() {
    console.log(this.props);
    return <div>MovieDetail</div>;
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
