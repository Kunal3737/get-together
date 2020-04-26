import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/scripts/Navigation';
import Home from './components/scripts/Home';
import Host from './components/scripts/Host';
import Join from './components/scripts/Join';
import Schedule from './components/scripts/Schedule';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/schedule" component={Schedule} />
          <Route render={() => <h2>404 Page Not Found</h2>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
