import { combineReducers } from "redux";
import user from './user_reducer';

const rootReducers = combineReducers({
    user,
    //chat
});

export default rootReducers;