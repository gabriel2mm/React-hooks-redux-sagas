import { applyMiddleware, createStore , compose  } from 'redux'
import rootReducer from '../Reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../Sagas/index';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;
  
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);

export default store;