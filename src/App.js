import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import * as components from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Examples</h1>
        </header>
        <Switch>
          <Route exact path="/" component={components.ExampleList} />
          <Route exact path="/1-ui-events-debounce" component={components.UIEventsDebounce} />
          <Route exact path="/1-ui-events-debounce-Rx" component={components.UIEventsDebounceRx} />
          <Route exact path="/2-socket-data" component={components.SocketData} />
          <Route exact path="/2-socket-data-Rx" component={components.SocketDataRx} />
        </Switch>
      </div>
    );
  }
}

export default App;
