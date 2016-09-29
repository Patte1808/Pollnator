import {ADD_POLL, ADD_POLL_ANSWER, ADD_POLL_ANSWER_EMPTY} from '../actions/actions';

let initialState = {
  polls: [],
  pollForm: {
    id: null,
    title: '',
    answers: ['']
  }
};

const update = (state, mutations) =>
  Object.assign({}, state, mutations);

function pollReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POLL:
      return update(state, state.polls.push(action.poll));

    case ADD_POLL_ANSWER:
      return update(state, state.pollForm.answers[action.id] = action.answer);

    case ADD_POLL_ANSWER_EMPTY:
      return update(state, state.pollForm.answers.push(''));

    default:
      return state;
  }
}

export default pollReducer;
