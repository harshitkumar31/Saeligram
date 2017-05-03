import { tassign } from 'tassign';
import { INCREMENT} from '../actions/actions';

export interface IAppState{
  counter: number;

}

export const INITIAL_STATE = {
  counter: 0,
};

export function rootReducer(state: IAppState, action): IAppState{

  switch (action.type){
    case INCREMENT:
      // return { counter: state.counter +1};
      return tassign(state, { counter: state.counter + 1});
  }
  return state;
}
