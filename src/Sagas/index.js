import {all} from 'redux-saga/effects'
import {TodoWatch} from './TodosWatch';

export default function* rootSaga() {
    yield all([
      TodoWatch()
    ])
  }