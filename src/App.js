import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PollForm from './components/PollForm';
import { Router, Route, browserHistory } from 'react-router';

const App = ({pollApp, actions}) => {
  const {pollForm} = pollApp;

  return (
    <Router history={browserHistory}>
      <Route path="/" component={PollForm} />
    </Router>
  );
};

export default App;
