import * as ACTIONS from './actions';
import emptyState from '../models/empty-state.json';
import { getSafe } from '../utilities';

// Reducer
const agentsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.AGENTS_RECEIVED:
      return Object.assign({}, state, { agents: action.payload });
    case ACTIONS.AGENTS_SET_DISPLAY_MODAL_ID:
      return Object.assign({}, state, { displayModalId: action.payload });
    case ACTIONS.AGENTS_SET_INPUT_RESOURCES:
      return Object.assign({}, state, { inputResources: action.payload });
    case ACTIONS.AGENTS_CLEAR:
      return emptyState.agents;
    default:
      return state;
  }
}

// Action creators
export const agentsReceived = (payload) => ({
  type: ACTIONS.AGENTS_RECEIVED,
  payload
});

export const agentsClear = () => ({
  type: ACTIONS.AGENTS_CLEAR
});

export const setDisplayModalId = (payload) => ({
  type: ACTIONS.AGENTS_SET_DISPLAY_MODAL_ID,
  payload
});

export const setInputResources = (payload) => ({
  type: ACTIONS.AGENTS_SET_INPUT_RESOURCES,
  payload
});

// Thunks
export const getAgents = () => {
  return (dispatch, getState, { serviceProvider, errorDispatch }) => {
    const payload = {
      t: new Date().getTime()
    };

    serviceProvider.agents.getAgents({ payload, getState }).then(({ data }) => {
      dispatch(agentsReceived(data));
    }).catch((error) => {
      errorDispatch(error, dispatch);
    });
  }
};

// export const getAgentById = (id) => {
//   return (dispatch, getState, { serviceProvider, errorDispatch }) => {
//     const payload = {
//       id,
//       t: new Date().getTime()
//     };

//     serviceProvider.agents.getAgentById({ payload, getState }).then(({ data }) => {
//       console.log("data ********************** ", data);
//       // dispatch(agentsReceived(data));
//     }).catch((error) => {
//       errorDispatch(error, dispatch);
//     });
//   }
// };

export const addAgent = (id) => {
  return (dispatch, getState, { serviceProvider, errorDispatch }) => {
    const state = getState();
    const agents = getSafe(() => state.agents.agents, []);
    const inputResources = getSafe(() => state.agents.inputResources, "");
    const resourceArr = inputResources.split(",");
    let payload = {};
    agents.forEach((agent) => {
      if(String(agent.id) === String(id) && inputResources.length > 0 && resourceArr.length > 0) {
        resourceArr.forEach((resource) => {
          agent.resources.push(resource);
        });

        payload = agent;
      }
    });

    payload.t = new Date().getTime();

    serviceProvider.agents.addAgent({ payload, getState }).then(({ data }) => {
      // dispatch(getAgentById(id));
      dispatch(getAgents());
    }).catch((error) => {
      errorDispatch(error, dispatch);
    });
  }
};


export default agentsReducer;