import React from 'react';
import TextField from 'material-ui/TextField';

const PollAnswersForm = ({answers, addPollAnswer}) => {

  return (
    <div>
    {answers.map((obj, key) => (
      <div key={key}>
        <TextField hintText="Enter poll option" onChange={() => (key === answers.length - 1) ? addPollAnswer() : null} /><br />
      </div>
    ))}
    </div>
  )
};

export default PollAnswersForm;
