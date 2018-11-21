import React, { Component } from 'react';
import Header from './components/common/header';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import NotFound from './components/notfound/notfound';
import List from './components/list/list';
import './App.css';
import EventDetail from './components/eventdetail/eventdetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
          <Route path="/" component={List} exact />
          <Route path="/event/:id" component={EventDetail} exact/>
          <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
