import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";
// store 만들기
// 중앙데이터 관리소 

// 모듈을 하나로 묶을 루트 리듀서
// 콤바인 리듀서 안에 리듀서 모듈의 목록을 넣는다.
// 객체 형태로 키-벨류 페어!
const rootReducer = combineReducers({
  todos
});
const store = createStore(rootReducer);

export default store;
