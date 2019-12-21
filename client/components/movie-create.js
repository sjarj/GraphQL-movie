import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import creatMovieMutation from '../queries/createMovie';
import readMovieQuery from '../queries/readMovies';

class MovieCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: '' };
  }

  handleSubmitForm(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props
        .mutate({
          variables: {
            title: this.state.terms
          },
          refetchQueries: [{ query: readMovieQuery }]
        })
        .then(() => {
          hashHistory.push('/movies');
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Ajouter un film</h1>
        <form className='col s6 input-field'>
          <input
            type='text'
            className='validate'
            onChange={e => this.setState({ terms: e.target.value })}
            onKeyPress={this.handleSubmitForm.bind(this)}
          />
          <label className='active'>Titre</label>
        </form>
      </div>
    );
  }
}
export default graphql(creatMovieMutation)(MovieCreate);
