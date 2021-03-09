import React from 'react';
import {GlobalStyle} from "./components/styles/GlobalStyles";
import {Home} from "./pages/Home";
import { Router } from '@reach/router';
import {Detail} from "./pages/Detail";
import {NavBar} from "./components/NavBar";
import {User} from "./pages/User";
import {Favs} from "./pages/Favs";
import {NotRegisterUser} from "./pages/NotRegisterUser";
import Context from "./Context";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => isAuth ? (
            <Router>
              <User path='/user'/>
              <Favs path='/favs' />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path='/favs'/>
              <NotRegisterUser path='/user'/>
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar/>
    </>
  )
};
