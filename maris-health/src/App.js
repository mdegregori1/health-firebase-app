import React from 'react';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Login from "./components/auth/Login"


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component={Dashboard}/>
          <Route path = "/Login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
