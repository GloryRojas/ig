import React  from 'react';
import { Link } from '@reach/router';
import {Article, Img, ImgWrapper} from "./styles";
import {useNearScreen} from "../../hooks/useNearScreen";
import {FavButton} from "../FavButton";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {ToggleLikeMutation} from "../../container/ToogleLikeMutation";

const defaultImage = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCard = ({ id, likes, src = defaultImage }) => {
  const key = `like-${id}`;
  const [ show, ref ] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(key, false);

  return(
      <Article ref={ref}>
        {show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="pet"/>
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              { (toogleLike) => {
                const handleFavClick = () => {
                  !liked && toogleLike({ variables: {
                    input: { id }
                    }});
                  setLiked(!liked);
                };
                return (
                  <FavButton
                    onClick={handleFavClick}
                    liked={liked}
                    likes={likes}
                  />
                )}
              }
            </ToggleLikeMutation>
          </>
        }
      </Article>
  )
};
