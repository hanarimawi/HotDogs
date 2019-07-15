import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import { BrowserRouter, Route, } from "react-router-dom";

ReactDOM.render(
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </BrowserRouter> ,
    (document.getElementById('root'))
);
    
// ReactDOM.render(<App />, document.getElementById('root'));
