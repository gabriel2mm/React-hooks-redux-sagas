  
import { put, takeLatest, all} from 'redux-saga/effects';

function* addMetter(action) {
    yield put({type : "ADD_TODO_SUCCESS" , payload : action.payload})
}

export function *TodoWatch() {
    yield all([
        takeLatest("ASYNC_ADD_TODO", addMetter),
    ])
}