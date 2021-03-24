import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { render } from 'react-dom';
import Login from '../src/components/Login/Login';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Registration from './components/Registration/Registration';
import { Button } from 'devextreme-react/button';
import './App.css'

function App() {
    return (
      <Router>
        <div>
          <nav className="navbar">
          <Button
                className="btn"
                type='success'
            >  <Link to="/">Login</Link></Button>
          
          <Button
                className="btn"
                type='success'
            > <Link to="/registration">Registration</Link></Button>
          </nav>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
          </Switch>
        </div>
      </Router>
    );
  }
  export default App;


