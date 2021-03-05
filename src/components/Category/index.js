import React from 'react';
import {Anchor, Image} from "./styles";

const DEFAULT_IMAGE = "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path = "#", emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt=""/>
      {emoji}
    </Anchor>
  )
};
