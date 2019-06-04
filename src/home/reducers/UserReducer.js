import {
  forEach,
  findIndex
} from 'lodash';

const INITIAL_STATE = {
  users: [],
  refresh: true
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  switch(action.type) {
    case "FETCH_USERS_SUCCESS":
      newState = {
        ...state,
        users: action.payload
      };
      break;
    case "USER_LIKED":
      action.payload.likesCount = (action.payload.likesCount)? action.payload.likesCount + 1: 1;
      var index = findIndex(newState.users, (user) => user.id === action.payload.id);
      newState.users.splice(index, 1, action.payload );
      break;
    case "USER_DISLIKED":
      action.payload.dislikesCount = (action.payload.dislikesCount)? action.payload.dislikesCount + 1: 1;
      var index = findIndex(newState.users, (user) => user.id === action.payload.id);
      newState.users.splice(index, 1, action.payload );
      break;
    default:
      newState = state;
  }

  return newState;
}