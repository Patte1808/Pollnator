import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PollAnswersForm from './PollAnswersForm';

import {connect} from 'react-redux';

const style = {
  margin: 12,
};

const PollForm = ({pollForm, actions}) => {

  const {answers} = pollForm;
  const {addPollAnswer, addPollAnswerEmpty, addPoll} = actions;

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

  return (
    <div style={style}>
      <TextField hintText="Type your question here" /><br />
      <PollAnswersForm answers={answers} addPollAnswer={addPollAnswer} addPollAnswerEmpty={addPollAnswerEmpty} />
      <RaisedButton label="Create Poll" primary={true} onClick={onAddPoll} />
    </div>
  );
};

export default PollForm;
