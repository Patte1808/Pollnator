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
  const {addPollAnswer} = actions;

  return (
    <div>
      <TextField hintText="Type your question here" /><br />
      <PollAnswersForm answers={answers} addPollAnswer={addPollAnswer} />
      <RaisedButton label="Primary" primary={true} style={style} />
    </div>
  );
};

export default PollForm;
