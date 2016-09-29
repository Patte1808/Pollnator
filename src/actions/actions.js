export const ADD_POLL = 'ADD_POLL';
export const ADD_POLL_ANSWER = 'ADD_POLL_ANSWER';
export const ADD_POLL_ANSWER_EMPTY = 'ADD_POLL_ANSWER_EMPTY';

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  }
}

export function addPollAnswer(id, answer) {
  return {
    type: ADD_POLL_ANSWER,
    id,
    answer
  }
}

export function addPollAnswerEmpty() {
  return {
    type: ADD_POLL_ANSWER_EMPTY
  }
}
