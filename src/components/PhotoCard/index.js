import React, { useRef, useEffect, useState } from 'react';
import {Article, Button, Img, ImgWrapper} from "./styles";
import { MdFavoriteBorder } from 'react-icons/md'

const defaultImage = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCard = ({ id, likes = 0, src = defaultImage }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    import('intersection-observer')
      .then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0];
          if(isIntersecting){
            setShow(true);
            observer.disconnect()
          }
        });
        observer.observe(ref.current)
      })
  }, [ref]);

  return(
      <Article ref={ref}>
        {show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="pet"/>
              </ImgWrapper>
            </a>
            < Button >
              < MdFavoriteBorder /> {likes} likes!
            </Button>
          </>
        }
      </Article>
  )
};
