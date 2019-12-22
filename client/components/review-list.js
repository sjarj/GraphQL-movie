import React, { Component } from 'react';

export default class ReviewList extends Component {
  renderReview() {
    return this.props.reviews.map(review => (
      <li key={review.id} className='collection-item'>
        {review.content}
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
