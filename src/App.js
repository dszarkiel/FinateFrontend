import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import TransactionsPanel from './components/TransactionsPanel'
import UserEditForm from './components/UserEditForm'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          
          <Route exact path="/transactions" component={TransactionsPanel} />
          <Route exact path="/user/edit" component={UserEditForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
