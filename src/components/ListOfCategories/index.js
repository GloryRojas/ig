import React, { useEffect, useState } from 'react';
import {Category} from "../Category";
import {Item, List} from "./styles";

const useCategoryData = () => {
  const [categories, setCategories] =  useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.fetch('https://ig-server-gr-api.vercel.app/categories')
      .then(resp => resp.json())
      .then(response => setCategories(response))
    setLoading(false);
  }, []);

  return {categories, loading};
};

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const {categories, loading} = useCategoryData();

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 100;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      { loading
        ? <Item key='loading'>
            <Category />
          </Item>
        : categories.map(item => (
          <Item key={item.id}>
            <Category  {...item} />
          </Item>
        ))
      }
    </List>
  );

  return(
    <>
      { renderList() }
      { showFixed && renderList(true) }
    </>
  )
};
