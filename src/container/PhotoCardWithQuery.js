import React from 'react';
import {PhotoCard} from "../components/PhotoCard";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_SINGLE_PHOTOS = gql`
  query getSinglePhotos($id:ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data = { photo: {}} }) => {
  if(loading) return <h1>Loading ...</h1>;
  if(error) return <h1>Houston! We have problems</h1>;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />
};

export const PhotoCardWitQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTOS} variables={{ id }}>
    { renderProp }
  </Query>
);
