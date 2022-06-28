import { all, fork } from 'redux-saga/effects'
import users from "./users/saga"

const sagas = [
  users,
]

export default function* rootSaga() {
  yield all(sagas.flat().map((saga) => fork(saga)))
}