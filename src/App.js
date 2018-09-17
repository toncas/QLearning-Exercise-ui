import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';
import MapViewer from './MapViewer.js';

class App extends Component{

  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/view-map/:id" component={MapViewer} />
            <Route component={() => <Redirect to="/"/>} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
