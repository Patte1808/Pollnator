import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PollForm from './components/PollForm';
import {connect} from 'react-redux';

import * as PollActions from './actions/actions';
import {bindActionCreators} from 'redux';

const App = ({pollApp, actions}) => {
  const {pollForm} = pollApp;

  return (
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
