// ./redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
