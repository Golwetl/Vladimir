import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import TabbarSandbox from './components/tabbar/Sandbox';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/tabbar" component={TabbarSandbox} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
