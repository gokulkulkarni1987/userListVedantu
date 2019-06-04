import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'userLocator',
      realtime: true
    })
  );
  const persistConfig = {
    key: 'root',
    storage
  };
  const persistedReducer = persistReducer(persistConfig, reducer);
  let store = createStore(persistedReducer, enhancer);
  persistStore(store);

  return store;
}
