import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PollFormWrapper from './components/PollFormWrapper';
import {connect} from 'react-redux';

import * as PollActions from './actions/actions';
import {bindActionCreators} from 'redux';

import { Router, Route, browserHistory } from 'react-router';

const App = ({pollApp, actions}) => {
  const {pollForm} = pollApp;

  return (
    <Router history={browserHistory}>
      <Route path="/" component={PollFormWrapper} />
    </Router>
    <PollForm pollForm={pollForm} actions={actions} />
  );
};

const mapStateToProps = (state) => {
  return {
    pollApp: state
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(PollActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
