import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
const extension = '__REDUX_DEVTOOLS_EXTENSION__';

export default(initialState) => {
    return createStore(
      rootReducer,
      compose(
        window[extension] ? window[extension]() : state => state,
        applyMiddleware(logger, thunkMiddleware)
      )
    );
}
