import React from 'react';
import { BrowserRouter,Switch, Route,Redirect } from 'react-router-dom'
import Layout from "./Layout/index.jsx"
import Login from "./page/login.jsx"
import Sign from "./page/sign.jsx"



class App extends React.Component {

  componentDidMount() {

  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route  path='/home' component={Layout} />
          <Route  path='/login' component={Login} />
          <Route  path='/sign' component={Sign} />
          <Redirect from="/" to="/login" />
          <Redirect from="/home" to="/login" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;



