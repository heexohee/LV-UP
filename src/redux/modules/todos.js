import uuid from 'react-uuid';

// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = {
  todos: [
    {
      id: uuid(),
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: uuid(),
    title: "울지말고",
    body: "해내기",
    isDone: true,
  },
};


// 리듀서 함수, 바깥으로 내보내서 store에서 사용.
// 두가지의 인풋이 필요(전역상태로 관리할 state, 어떤 처리를 할지에 대한 action.
// action -> type, payload
const todos = (state = initialState, action) => {
  // 액션을 지정해서 이렇게 해주라고 적기.
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload], // 기존의 todos 배열에 새로운 todo를 추가
      };

      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

// 여기서 내보낸 todos 모듈은 store에서 받는다.
export default todos;
