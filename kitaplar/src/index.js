import React from 'react';
import ReactDOM from 'react-dom';
import Anasayfa from './components/Anasayfa';
import Kitap from "./components/Kitap.jsx";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Kitapsayfasi from './components/Kitapsayfasi';
import Arama from './components/Arama';


ReactDOM.render(
  
  <Router>

  <Route exact path="/">
  <Anasayfa/>
  </Route>

  <Route exact path="/kitap/:id">
  <Kitapsayfasi/>
  </Route>

  <Route exact path="/arama">
  <Arama/>
  </Route>


  </Router>,
  document.getElementById('root')
);

