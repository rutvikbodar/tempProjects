import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import signInReducer from './signInReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    signedIn : signInReducer,
    form : formReducer,
    streams : streamReducer
});