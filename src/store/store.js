import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

//reducers
import homeReducer from './reducers';

//sage watch
import { watchHome } from './sagas';

//merge deducer with combineReducers()
const rootReducer = combineReducers({
  home: homeReducer
});

const sagaMiddleware = createSagaMiddleware();

//global store for app

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchHome);

export default store;
