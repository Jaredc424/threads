import { SET_USER } from '../constants';

export default (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};
