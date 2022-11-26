import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { errorDispatch, serviceProvider } from '../services';

const loggerThunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    console.groupCollapsed('~> Logger THUNK');
    console.log(action);
  }
  console.groupEnd();
  return next(action);
}

const loggerState = (store) => (next) => (action) => {
  console.groupCollapsed('~> Logger ' + action.type);
  console.log('Action:', action);
  console.log('Payload:', action.payload);
  console.log('State:', store.getState());
  console.groupEnd();
  return next(action);
}

const middleware = [loggerThunk, loggerState, thunk.withExtraArgument({ errorDispatch, serviceProvider }), promise];
export default middleware;