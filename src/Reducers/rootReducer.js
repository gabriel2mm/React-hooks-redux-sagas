import { combineReducers } from 'redux';
import  Todos  from './todosReducer';

const rootReducer = combineReducers({
    Todos
});

export default rootReducer;