import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
const rootReducer = combineReducers({ reducers });
//applyMiddleware함수로 redux-saga적용
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
//saga 미들웨어 실행
sagaMiddleWare.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
