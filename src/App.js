import React from 'react';
import './App.css';
import Counter from "./components/counter";
import About from "./components/about";
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Gallery from './components/gallery';

function App() {
  return (
    /* <div className="m-3">
        <Counter title="Counter 1" value={1} image="images/profile.png" /> pass props to component
        <Counter title="Counter 2" value={1} image="images/cat.png" />
      </div> */
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2">
        <ul className="navbar-nav">
          <li><Link className="nav-link" to="/home">Home</Link></li>
          <li><Link className="nav-link" to="/counter">Counter</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
      <div className="m-4">
        <Switch>
          <Route path="/home"></Route>
          <Route path="/counter" component={Counter}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/gallery" component={Gallery}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
