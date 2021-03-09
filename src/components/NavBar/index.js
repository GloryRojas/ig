import React from 'react';
import {Link, Nav} from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/all";

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'> <MdHome size='32px'/> </Link>
      <Link to='/favs'> <MdFavoriteBorder size='32px'/></Link>
      <Link to='/user'> <MdPersonOutline size='32px'/> </Link>
    </Nav>
  )
};
