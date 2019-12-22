import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import createReviewMutation from '../queries/createReview';

class ReviewCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: '' };
  }

  handleSubmitForm(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      // requete graphql
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
        </form>
      </div>
    );
  }
}

export default compose(graphql(createReviewMutation))(ReviewCreate);
