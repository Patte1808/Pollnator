export const ADD_POLL = 'ADD_POLL';
export const ADD_POLL_ANSWER = 'ADD_POLL_ANSWER';

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  }
}

export function addPollAnswer() {
  return {
    type: ADD_POLL_ANSWER
  }
}
