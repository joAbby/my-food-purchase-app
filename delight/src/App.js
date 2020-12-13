import { Switch, Route, Redirect } from "react-router-dom";
import WebFontLoader from "webfontloader";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import HomePage from "./pages/home/HomePage";
import SignIn from "./pages/SignIn";
import Header from "./common/header/Header";
import Cart from "./pages/cart/Cart";
import { selectCurrentUser } from './redux/user/UserSelectors';

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"],
  },
});

const App = ({ currentUser }) => {
  return (
    <div>
      <Header user={currentUser}/>
      <Switch>
      <Route
              exact
              path='/login'
              render={() =>
                currentUser ? (<Redirect to='/' /> ):( <SignIn/>)
              }
            />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps
)(App);
