export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FETCH = "GET_USERS_FETCH";
//getUserFetch가 실행되면 GET_USERS_FETCH 타입이 동작
export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});
