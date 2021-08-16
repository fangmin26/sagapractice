import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";
//call은 api를 불러오고 put은 action을 불러온다.
import { call, put, takeEvery } from "redux-saga/effects";

const api = () => {
  return fetch("http://jsonplaceholder.typicode.com/users").then(
    (response) => response.json
  );
};
//generator 함수
function* getUsers() {
  //api가져오기를 기다리고
  const users = yield call(api);
  //action 실행
  yield put({ type: GET_USERS_SUCCESS, users });
}
function* sagas() {
  //GET_USERS_FETCH가 call 되면 뒤 generator 함수 실행
  yield takeEvery(GET_USERS_FETCH, getUsers);
}
export default sagas;
