import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom"
import Login from './components/Login/Login'
import Index from './components/Index/Index'
import Navigation from './components/Navigation/Navigation'
import Test from './components/Test/Test'
import ViewIndex from './components/ViewIndex/ViewIndex.js'

const App =() => {
  return(
    <Router>

    <div className="app">

      <Switch>


        <Route path="/charts">
          <Index />
        </Route>

        <Route path="/viewindex">
          <ViewIndex />
        </Route>

        <Route path="/">
          <Index />
        </Route>

        {/* <Route path="/login">
          <Login />
        </Route> */}

      
      </Switch>

    </div>

    </Router>
  )
}

export default App;