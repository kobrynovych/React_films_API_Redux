import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import users_reducer from './users_reducer';

const rootReducer = combineReducers({
    users_reducer: users_reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// window.store = store;