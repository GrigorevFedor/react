import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../home";
import Chats from "../chats";
import { Profile } from "../profile";
import { News } from '../News/news'
import { PublicRoute } from "./public";
import { PrivateRoute } from "./private";
import { login, signUp, signOut, auth } from '../../services/firebase';
import { onAuthStateChanged } from "firebase/auth";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async (email, pass) => {
    try {
      await login(email, pass);
      // setAuthed(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = async (email, pass) => {
    try {
      await signUp(email, pass);
      // setAuthed(true);
    } catch (e) {
      console.log(e);
    }
  }

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact authed={authed}>
          <Home onLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path="/signup" exact authed={authed}>
          <Home onSignUp={handleSignUp} />
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