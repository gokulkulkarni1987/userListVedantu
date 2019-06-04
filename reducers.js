import { combineReducers } from 'redux';
import UserReducer from './src/home/reducers/UserReducer';

export default combineReducers({
  users: UserReducer,
});