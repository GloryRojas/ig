import React, { useRef, useEffect, useState } from 'react';
import {Article, Button, Img, ImgWrapper} from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useNearScreen} from "../../hooks/useNearScreen";

const defaultImage = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCard = ({ id, likes = 0, src = defaultImage }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [ show, ref ] = useNearScreen();

  const Icon = ()  => liked ? <MdFavorite/> : < MdFavoriteBorder />;

  return(
      <Article ref={ref}>
        {show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="pet"/>
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon /> {likes} likes!
            </Button>
          </>
        }
      </Article>
  )
};
