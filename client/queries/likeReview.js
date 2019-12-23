import gql from 'graphql-tag';

export default gql`
  mutation likeReview($id: ID) {
    likeReview(id: $id) {
      id
      likes
    }
  }
`;
