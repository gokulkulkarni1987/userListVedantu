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
      let newUsers = newState.users.map((user) => {
        if (user.id === action.payload.id) {
          return Object.assign({}, user, {
            likesCount: (user.likesCount)? user.likesCount + 1: 1
          });
        }
        return user;
      });
      newState = {
        ...newState,
        users: newUsers
      }
      break;
    case "USER_DISLIKED":
        let newUsersDislike = newState.users.map((user) => {
          if (user.id === action.payload.id) {
            return Object.assign({}, user, {
              dislikesCount: (user.dislikesCount)? user.dislikesCount + 1: 1
            });
          }
          return user;
        });
        newState = {
          ...newState,
          users: newUsersDislike
        }
      break;
    default:
      newState = state;
  }

  return newState;
}