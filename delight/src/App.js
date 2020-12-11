import { useState } from 'react'
import logo from "./logo.svg";
import { Switch, Route, Redirect } from "react-router-dom";
import WebFontLoader from "webfontloader";

import HomePage from "./pages/home/HomePage";
import SignIn from "./pages/SignIn";
import Header from "./common/header/Header";
import Cart from "./pages/cart/Cart";

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"],
  },
});

function App() {
  let user = sessionStorage.getItem('userData')
  const userData = user ? JSON.parse(sessionStorage.getItem('userData')):"";
  return (
    <div>
      <Header user={user}/>
      <Switch>
      <Route
              exact
              path='/login'
              render={() =>
                user ? <Redirect to='/' /> : <SignIn />
              }
            />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
