import React from 'react';
import TextField from 'material-ui/TextField';

const PollAnswersForm = ({answers, addPollAnswer, addPollAnswerEmpty}) => {

  const onAddPollAnswer = (e) => {
    const id = e.target.id;
    const title = e.target.value;

    addPollAnswer(id, title);
  }

  return (
    <div>
    {answers.map((obj, key) => (
      <div key={key}>
        <TextField hintText="Enter poll option" id={key.toString()}
          onKeyUp={onAddPollAnswer}
          onChange={() => (key === answers.length - 1) ? addPollAnswerEmpty() : null} /><br />
      </div>
    ))}
    </div>
  )
};

export default PollAnswersForm;
