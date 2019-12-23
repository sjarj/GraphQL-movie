import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import createReviewMutation from '../queries/createReview';
import readMovieQuery from '../queries/readMovie';

class ReviewCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: '' };
  }

  handleSubmitForm(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props
        .createReviewMutation({
          variables: { content: this.state.terms, movieId: this.props.movieId }
        })
        .then(() => this.setState({ terms: '' }));
    }
  }

  render() {
    return (
      <div className='row'>
        <form className='input-field s6'>
          <input
            type='text'
            className='validate'
            onChange={e => this.setState({ terms: e.target.value })}
            value={this.state.terms}
            onKeyPress={this.handleSubmitForm.bind(this)}
          />
          <label className='active'>Ajouter une review</label>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(createReviewMutation, {
    name: 'createReviewMutation'
  })
)(ReviewCreate);
