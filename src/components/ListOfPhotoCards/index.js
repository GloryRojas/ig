import React from 'react';
import {PhotoCard} from "../PhotoCard";

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return(
    <ul>
      { photos.map(photo => (
        <PhotoCard id={photo.id} {...photo} />
      ))}
    </ul>)
};
