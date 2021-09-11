import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import Chats from "./chats";
import { Profile } from "./profile";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chats/:chatId?" component={Chats}>
          {/* <Chats /> */}
        </Route>
        <Route path="/profile" component={Profile}>
          {/* <Profile /> */}
        </Route>
        <Route>
          <h4>404</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};