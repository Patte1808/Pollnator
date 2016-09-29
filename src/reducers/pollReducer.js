import {ADD_POLL, ADD_POLL_ANSWER} from '../actions/actions';

let initialState = {
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
      return {
        id: action.id,
        title: action.title,
        answers: action.answers
      }

    case ADD_POLL_ANSWER:
        return update(state, state.pollForm.answers.push(''));

    default:
      return state;
  }
}

export default pollReducer;
