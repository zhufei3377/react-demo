import defaultState from '../models/empty-state.json';
import agents from './agents';

const rootReducer = (state = defaultState, action = {}) => {
  return {
    agents: agents(state.agents, action)
  }

}

export default rootReducer;