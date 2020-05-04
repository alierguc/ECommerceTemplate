import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UrunListele from '../src/sections/pages/UrunListele';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfilimSections from './sections/Profilim';
import HomePage from './sections/HomePage';
import SignMainPage from './sections/pages/SignMainPage';
import ProfilimPage from './sections/pages/ProfilimPage';
ReactDOM.render(
  <Router>
      <Switch>
            <Route exact path='/App' component={App}/>
            <Route exact path='/profilim' component={ProfilimSections}/>
            <Route exact path='/SignMainPage' component={SignMainPage}/>
            <Route exact path='/profilimPage' component={ProfilimPage}/>
            <Route exact path='/UrunListele' component={UrunListele}/>
            <Route render={function () {
              return <App/>
            }} />
          </Switch>
  </Router>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
