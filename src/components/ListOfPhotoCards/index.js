import React from 'react';
import {PhotoCard} from "../PhotoCard";

export const ListOfPhotoCards = () => {
  return([1,2,3,].map(item => (
    <PhotoCard />
  )))
};
