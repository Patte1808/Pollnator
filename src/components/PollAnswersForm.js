import React from 'react';
import TextField from 'material-ui/TextField';

const PollAnswersForm = ({answers, addPollAnswer}) => {

  const onAddPollAnswer = (key) => {
    console.log(answers.length);
    console.log(key);
    if(answers.length - 1 === key) {
      addPollAnswer();
    }
  };

  return (
    <div>
    {answers.map((obj, key) => (
      <div key={key}>
        <TextField hintText="Enter poll option" onKeyUp={onAddPollAnswer(key)} /><br />
      </div>
    ))}
    </div>
  )
};

export default PollAnswersForm;
