import {
  forEach
} from 'lodash';

const INITIAL_STATE = {
  users: []
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  console.log('this is called', action);

  switch(action.type) {
    case "FETCH_USERS_SUCCESS":
      newState = {
        ...state,
        users: action.payload
      };
      break;
    case "USER_LIKED":
        forEach(newState.users, (user) => {
          if(user.id === action.payload.id) {
            user.likesCount = (user.likesCount)? user.likesCount + 1: 1;
            return;
          }
        });
      break;
    case "USER_DISLIKED":
      forEach(newState.users, (user) => {
        if(user.id === action.payload.id) {
          user.dislikesCount = (user.dislikesCount)? user.dislikesCount + 1: 1;
          return;
        }
      });
      break;
    default:
      newState = state;
  }

  return newState;
}