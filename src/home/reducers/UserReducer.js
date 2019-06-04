
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
    default:
      newState = state;
  }

  return newState;
}