import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import likeReviewMutation from '../queries/likeReview';

class ReviewList extends Component {
  likeReview(id) {
    this.props.likeReviewMutation({ variables: { id } });
  }

  renderReview() {
    return this.props.reviews.map(review => (
      <li key={review.id} className='collection-item'>
        {review.content}
        <div className='secondary-content delete_button'>
          <i
            className='material-icons '
            onClick={() => this.likeReview(review.id)}
          >
            thumb_up
          </i>
          {review.likes}
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul className='collection'>
          {this.props.reviews && this.renderReview()}
        </ul>
      </div>
    );
  }
}

export default compose(
  graphql(likeReviewMutation, { name: 'likeReviewMutation' })
)(ReviewList);
