import logo from './logo.svg';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import WebFontLoader from 'webfontloader';

import HomePage from './pages/home/HomePage';
import Header from './common/header/Header';

WebFontLoader.load({
    google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      </Switch>
</div>)}

export default App;