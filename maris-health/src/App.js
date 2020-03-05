import React from 'react';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component={Dashboard}/>
          <Route path = "/Login" component={Login}/>
          <Route path = "/Register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
