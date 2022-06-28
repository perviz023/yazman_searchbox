import { takeLatest, put, call } from "redux-saga/effects";
import { getUserListActions } from "../reducer/getUserList";
import data from "../saga/userData.json"

export function* getList({ payload }) {


  const list = data[payload.type].filter(item => {
  
    if(item.name.toLowerCase().indexOf(payload.value.toLowerCase())>= 0 && payload.value != ""){
      return item;
    }
  })

  yield put(
    getUserListActions.end({
      list: list,
      value: payload.value
    })
  );
}

export default function* getListSaga() {
  yield takeLatest(getUserListActions.start, getList);
}
