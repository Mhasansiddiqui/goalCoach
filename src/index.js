import React from 'react';
import ReactDOM from 'react-dom'

import { createStore } from 'redux';

import {Provider}  from 'react-redux';

import {Router ,Route,browserHistory} from 'react-router'
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import  {firebaseApp} from './firebase';

import {logUser} from './actions'
import reducer from './reducers'
import { storage } from 'firebase';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
       // console.log('user has sign in or up',user);

     const { email } = user;
    store.dispatch ( logUser(email))
        browserHistory.push('/app');
    }
    else {
       // console.log('user has sign out');
        browserHistory.push('/signup');
    }
})
ReactDOM.render(
    <Provider   store={store}  >
    <Router path="/"  history={browserHistory}>
      <Route path="/app"  component={App} ></Route>
      <Route path="/signin"  component={SignIn} ></Route>
      <Route path="/signup"  component={SignUp} ></Route>
    </Router>
    </Provider>
    ,
    document.getElementById('root')
)