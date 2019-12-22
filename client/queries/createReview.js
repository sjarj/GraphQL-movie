import gql from 'graphql-tag';

export default gql`
  mutation AddReview($title: String) {
    addReview(title: $title) {
      id
      title
    }
  }
`;
