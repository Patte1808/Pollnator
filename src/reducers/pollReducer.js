import {ADD_POLL} from '../actions/actions';

function pollReducer(state = [], action) {
  switch(action.type) {
    case ADD_POLL:
      return {
        id: action.id,
        title: action.title,
        answers: action.answers
      }

    default:
      return state;
  }
}

export default pollReducer;
