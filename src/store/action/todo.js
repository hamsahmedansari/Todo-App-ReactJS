import actionType from "../constant/constant";
import { save, getAll, deleteTodos } from "../../service/todo";
export function addTodo(param) {
  return async dispatch => {
    await save(param)
      .then(({ data: res }) => {
        dispatch({
          type: actionType.ADD_TODO,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
}
export function changeTodo(param) {
  return async dispatch => {
    await save(param)
      .then(({ data: res }) => {
        dispatch({
          type: actionType.CHANGE_TODO,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
}

export function getTodos(param) {
  return async dispatch => {
    await getAll()
      .then(({ data: res }) => {
        dispatch({
          type: actionType.GET_ALL_TODO,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
}
export function deleteTodo(param) {
  return async dispatch => {
    await deleteTodos(param)
      .then(({ data: res }) => {
        dispatch({
          type: actionType.DELETE_TODO,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
}
