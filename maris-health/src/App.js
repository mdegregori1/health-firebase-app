import React from 'react';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path ="/" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
