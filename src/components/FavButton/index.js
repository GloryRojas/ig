import React from 'react';
import {Button} from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({liked, onClick, likes = 0}) => {
  const Icon = ()  => liked ? <MdFavorite/> : < MdFavoriteBorder />;

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  );
};
