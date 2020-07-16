import {
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO
} from "../constants/action-types.js";
export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  payload: todo
});

export const checkTodo = todo => ({
  type: CHECK_TODO,
  payload: todo
});
