import { tassign } from 'tassign';
import { INCREMENT, SET_AUTH_DETAILS, RESET_AUTH_DETAILS} from '../actions/actions';

export interface IAppState{
  counter: number;
  user: object;
  authenticated: boolean,
}

export const INITIAL_STATE = {
  counter: 0,
  user: {

  },
  authenticated: false,
};

export function rootReducer(state: IAppState, action): IAppState{

  switch (action.type){
    case INCREMENT:
      return tassign(state, { counter: state.counter + 1});
    case SET_AUTH_DETAILS:{
      return tassign(state, {user: action.payload, authenticated: true });
    }
    case RESET_AUTH_DETAILS:{
      return tassign(state, {user: {}, authenticated: false });
    }
  }
  return state;
}
