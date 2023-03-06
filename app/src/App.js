import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Navmenu from './components/Nav.js'
import Pricing from './components/Pricing.js'
import FAQ from './components/FAQ.js'
import Bottom from './components/Bottom.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Navmenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/faq" component={FAQ} />
        </Switch>
        <Bottom />
      </div>
    </Router>
  );
}

export default App;