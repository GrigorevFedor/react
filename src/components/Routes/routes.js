import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from 'react';

import { Home } from "../home";
import Chats from "../chats";
import { Profile } from "../profile";
import { News } from '../News/news'
import { PublicRoute } from "./public";
import { PrivateRoute } from "./private";


export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  }
  console.log('authed', authed)
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact authed={authed}>
          <Home onLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path="/signup" exact authed={authed}>
          <Home onSignUp={handleLogin} />
        </PublicRoute>
        <PrivateRoute path="/chats/:chatId?" component={Chats} authed={authed}>
          <Chats />
        </PrivateRoute>
        <PrivateRoute path="/profile" exact authed={authed}>
          <Profile onLogout={handleLogout} />
        </PrivateRoute>
        <Route path="/news" component={News}>
        </Route>
        <Route>
          <h4>404</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};