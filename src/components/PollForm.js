import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PollAnswersForm from './PollAnswersForm';

import {connect} from 'react-redux';
import * as PollActions from '../actions/actions';
import {bindActionCreators} from 'redux';

const style = {
  margin: 12,
};

const PollForm = ({pollForm, actions}) => {

  const {answers} = pollForm;
  const {addPollAnswer, addPollAnswerEmpty, addPoll, changePollTitle} = actions;

  const onAddPoll = () => {
    let poll = pollForm;
    let sanitizedAnswers = [];
    poll.id = Math.random();

    for(let i = 0; i < answers.length; i++) {
      if(answers[i] !== '') {
        sanitizedAnswers.push(answers[i]);
      }
    }

    poll.answers = sanitizedAnswers;

    addPoll(poll);
  };

  const onChangePollTitle = (e) => {
    changePollTitle(e.target.value);
  }

  return (
    <div style={style}>
      <TextField hintText="Type your question here" onChange={onChangePollTitle} /><br />
      <PollAnswersForm answers={answers} addPollAnswer={addPollAnswer} addPollAnswerEmpty={addPollAnswerEmpty} />
      <RaisedButton label="Create Poll" primary={true} onClick={onAddPoll} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pollForm: state
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(PollActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);
