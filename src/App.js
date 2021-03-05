import React from 'react';
import {ListOfCategories} from "./components/ListOfCategories";
import {GlobalStyle} from "./components/styles/GlobalStyles";
import {ListOfPhotoCards} from "./components/ListOfPhotoCards";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <ListOfCategories />
      <ListOfPhotoCards/>
      <ListOfPhotoCards/>
    </>
  )
};